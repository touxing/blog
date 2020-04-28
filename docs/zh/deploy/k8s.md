# kubernetes

## 安装
有条件物理机安装者，直接看kebernetes官网安装教程，
不过可以先在虚拟机安装熟悉流程，节约时间

本地学习可以用虚拟机安装 minikube 版本
[官网](https://kubernetes.io/docs/tasks/tools/install-minikube/)
简单快捷，我们的目的是了解安装，可以安装使用，而不是在安装过程中消耗太多时间

### 准备：
- VMWare 虚拟机软件
- CentOS 7 IOS 文件
- 配置尽量高一点的电脑
- 有网络，可以访问Google(非必要，遇到疑难杂症帮助很大)

1. 创建VMWare虚拟机（virtualBox也可以），安装 `CentOS` 系统
2. 安装完 CentOS 系统 可以做个快照备份，系统搞崩了不用重新安装，直接快照还原
3. 根据官网安装 `minikube`


## 启动 minikube
```bash
minikube start # --vm-driver=none 指定 VM 驱动程序 默认 none 在当前主机运行k8s组件
```
启动过程中遇到的问题，国内网络无法拉取镜像，设置国内镜像地址
```bash
minikube start --image-mirror-country=cn --iso-url=https://kubernetes.oss-cn-hangzhou.aliyuncs.com/minikube/iso/minikube-v1.6.0.iso --registry-mirror=https://dockerhub.azk8s.cn  --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers
```

## 安装dashboard
```bash
minikube dashboard
```
```
(base) ➜  ~ * Verifying dashboard health ...
* Launching proxy ...
* Verifying proxy health ...
http://127.0.0.1:41730/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/
```

启动后，输出一个url，是访问浏览器访问`dashboard`的地址，但只能本地访问，要设置代理才能局域网或者公网访问, 详情查看 `kubectl proxy --help`
```bash
kubectl proxy --address='0.0.0.0' --accept-hosts="^*$" # 允许所有地址访问
# Starting to serve on [::]:8001
```

在宿主主机浏览器中访问 `http://<master_ip>:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/`

遇到的问题：
 安装 dashboard 失败问题参考：https://github.com/kubernetes/minikube/issues/5860

 启动 dashboard 失败问题参考：https://github.com/kubernetes/minikube/issues/4411


## 部署第一个应用
> 官网的[Hello World](https://kubernetes.io/zh/docs/tutorials/hello-minikube/) 提供在线 kubernetes 环境

本地 minikube 环境 部署应用
> 参考：https://segmentfault.com/a/1190000014116698
