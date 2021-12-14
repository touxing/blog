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

参考：
[阮一峰老师的博客 《GitHub Actions 入门教程》](http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)
[Github Action 官方教程](https://docs.github.com/en/actions)
