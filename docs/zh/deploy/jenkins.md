# Jenkins


## 安装（基于CentOS)
[官网教程](https://www.jenkins.io/zh)
三种安装方式
  - 下载 war 包，Tomcat中运行 `java -jar jenkins.war --HttpPort=8080`
  - yum 安装
  - docker 安装（推荐）

根据官网安装 Docker 环境

> 国内配置清华源
Fedora/CentOS/RHEL
以下内容根据 官方文档 修改而来。

如果你之前安装过 docker，请先删掉
```bash
sudo yum remove docker docker-common docker-selinux docker-engine
```
安装一些依赖
```bash
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```
根据你的发行版下载repo文件:
```bash
wget -O /etc/yum.repos.d/docker-ce.repo https://download.docker.com/linux/centos/docker-ce.repo
```
把软件仓库地址替换为 TUNA:
```bash
sudo sed -i 's+download.docker.com+mirrors.tuna.tsinghua.edu.cn/docker-ce+' /etc/yum.repos.d/docker-ce.repo
```
最后安装:
```
sudo yum makecache fast
sudo yum install docker-ce
```

安装Jenkins
```bash
docker run \
  -u root \
  --rm \
  -d \
  -p 8080:8080 \
  -p 50000:50000 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  jenkinsci/blueocean
```

## 构建nodejs应用

安装插件：
- Nodejs
- Git 从仓库拉取代码构建
- Git Pramater 可选，用于配置选择构建不同的分支

1. 创建一个任务，选择 `FreeStyle Project` 自由风格工程
2. 配置 git 仓库，配置秘钥（或HTTPS方式的配置密码）
3. 构建环境，选择 nodejs
3. 构建，选择执行 shell 配置构建命令 eg: `npm install && npm build` 根据实际需求配置
4. 构建后执行，可选，可以配置部署到线上环境
