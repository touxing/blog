---
title: 部署
date: 2022-11-25
icon: customize
order: 6
category:
  - 部署
tag:
  - 部署
---
# 部署

## 一次性部署
> 不适合项目开发
手工打包，把dist直接copy到远程服务器

## 自动化部署

### Jenkins
> [中文官网](https://jenkins.io/zh)

[jenkins](./jenkins/)

### Travis
> 一款CI工具

### Buddy
> 一款CI工具
## [Docker](./docker/)

## k8s

[kubernetes](./k8s/)


## 工具

终端连接工具
putty + [mtputty](https://ttyplus.com/downloads/)(开启多标签功能)

---

~~本博客部署采用 `Travis` 构建 配置文件 `.travis.yml`~~
Travis 更新免费使用策略，需要信用卡，没卡用不了
换 `Github Action` 配置文件 `.github/workflow/deploy.yml`

本博客action配置参考

```yaml
name: Node.js CI

on:
  push:
    branches: [ master ] # on 监听 push 动作 branches 分支

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Build
        env:
          NODE_OPTIONS: '--max_old_space_size=4096'
        run: |  # 执行命令 | 可以换行执行命令
          yarn
          yarn build

      # 部署到 GitHub Pages
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.3 # 使用别人写的action
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # github 设置的 ACCESS_TOKEN
          BRANCH: gh-pages # 部署分支
          FOLDER: docs/.vuepress/dist # 打包目录
```

参考：
[阮一峰老师的博客 《GitHub Actions 入门教程》](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
[Github Action 官方教程](https://docs.github.com/en/actions)


### GitLab

尝试 GitLab 的 `CI/CD` 功能

准备：

1. 创建 `.gitlab-ci.yml` 文件
2. install runner and config runner

#### example
```yml
stages:
   - build
   - deploy

# build stage
build_app:
   image: node:alpine
   stage: build
   only:
      - master
   script:
      - npm install
      - npm run build
   cache:
     paths:
       - node_modules/
   artifacts:
      paths:
         # build folder
         - dist/
      expire_in: 1 hour

# production stage
production:
   stage: deploy
   before_script:
      - mkdir -p ~/.ssh
      - echo -e "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
      - chmod 600 ~/.ssh/id_rsa
      - '[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config'
   script:
      - scp -r dist/* username@server-ip-address:/var/www/html/
```
> 参考：https://shouts.dev/articles/build-and-auto-deploy-vuejs-app-to-server-using-gitlab-ci-cd
