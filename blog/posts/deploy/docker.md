---
title: Docker
date: 2022-11-25
icon: customize
category:
  - 部署
tag:
  - Docker
---
# Docker

## 安装

## 启动docker
```bash
docker create <name>
docker start <name>
```
```
docker run <image_name>
```

学会help
```bash
docker --help
```

## 镜像
拉取仓库的镜像
```bash
git pull <image_name>
```

通过 `Dockerfile` 打包镜像
> 这里直接打包一个包含`node_modules`的镜像
> 因为我只需要运行访问，所以这样操作，避免国内 `npm install` 遇到的报错问题
`vim Dockerfile`
```Dockerfile
FROM node:lts # 基于 node 容器 :<标签> 版本
# 构建时运行的命令
RUN alias cnpm="npm --registry=https://registry.npm.taobao.org \
        --cache=$HOME/.npm/.cache/cnpm \
        --disturl=https://npm.taobao.org/dist \
        --userconfig=$HOME/.cnpmrc"
# COPY package*.json ./project/s_h5 # 复制包信息文件，需要再打包是安装依赖
# RUN npm install
COPY . ./project/s_h5
EXPOSE 8009 # 暴露的端口
# 启动容器时执行的命令，如果有多条只执行最后一条，多条写成 && 形式
CMD cd ./project/s_h5 && npm run start
```
忽略要打包的文件
`vim .dockerignore`
```dockerignore
#node_modules
npm_debug.log
```


执行打包，在当前目录打包镜像
```bash
docker build -t image_name:v1 .
```

查看镜像
```bash
docker images # or docker image ls
```

导出镜像
```bash
docker save -o out_image_name <image:tag>
# eg: docker save -o image_test.tar nginx:1.2
```

导入镜像
```bash
docker load -i <资源路径>
```
