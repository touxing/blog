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
把命令操作写成 yml 配置文件，方便使用

---
参考资料：
[Docker 和 Kubernetes：给程序员的快速指南](https://zhuanlan.zhihu.com/p/39937913)


### 利用配置文件创建 Pod Deployment Service

Pod 是 Kubernetes 应用程序的基本执行单元，即它是 Kubernetes 对象模型中创建或部署的最小和最简单的单元。Pod 表示在 集群 上运行的进程。

Pod 是 Kubernetes 抽象出来的，表示一组一个或多个应用程序容器（如 Docker 或 rkt ），以及这些容器的一些共享资源。这些资源包括:

- 共享存储，当作卷
- 网络，作为唯一的集群 IP 地址
- 有关每个容器如何运行的信息，例如容器映像版本或要使用的特定端口。

Kubernetes Service 定义了这样一种抽象：逻辑上的一组 Pod，一种可以访问它们的策略 —— 通常称为微服务。 这一组 Pod 能够被 Service 访问到，通常是通过 selector （查看下面了解，为什么你可能需要没有 selector 的 Service）实现的。

Service 可以理解成提供对外访问的服务（接口）

Deployment 一个为 `Pod`和`ReplicaSets` 提供声明式更新的调度器。用于管理 Pod。

#### 配置文件例子

> kubectl get 查看列表
> kubectl describe 查看详情
> kubectl logs 查看日志
> kubectl exec 执行容器命令

本地镜像文件 `sh5dev:v1`

##### 配置 Deployment `vim deployment-sh5-dev.yml`
```yml
apiVersion: apps/v1 # for versions before 1.9.0 use apps/v1beta2
kind: Deployment # 服务类型
metadata:
  name: dp-sappdev
spec:
  selector: # 选择要管理的 Pod
    matchLabels:
      app: s-h5dev # 匹配要管理的 Pod 的标签，没有匹配到会创建一个新的 Pod
  replicas: 2 # tells deployment to run 2 pods matching the template
  template: # 模板
    metadata:
      labels:
        app: s-h5dev
    spec: # 指定运行的容器，和配置
      containers:
      - name: sh5app-container
        image: sh5dev:v1 # 容器启动用的镜像
        ports:
        - containerPort: 8009 # 对外暴露的端口
```
创建 Deployment `kubectl create -f deployment-sh5-dev.yml` 创建的Deployment需要运行 `kubectl run <NAME> ` 这里的 `NAME=dp-sappdev`
直接运行 `kubectl apply -f deployment-sh5-dev.yml`
查看 `kubectl get deployment`

##### 配置 Pod `vim pod-sh5.yml`
```yml
apiVersion: v1
kind: Pod
metadata:
  name: sh5
  labels:
    app: s-h5-app
spec: # 指定运行的容器
  containers:
    - name: s-h5-pod
      image: sh5dev:v1
      ports:
        - containerPort: 8009

```
运行 Pod `kubectl apply -f pod-sh5.yml`
查看 `kubectl get pods`

##### 配置 Service `vim `

```
apiVersion: v1
kind: Service
metadata:
  name: sh5dev-svc
  labels:
    app: sh5dev-svc
spec:
  type: NodePort
  ports:
    - port: 8009
      # nodePort: 30051 # 指定对外暴露的端口，不指定会内部分配 `minikube service sh5dev-svc` 查看访问url
  selector: # 指定对外暴露的 Pod 的 labels{key,value} 的形式，例子匹配 Pod 的labels 是 app:s-h5dev
    app: s-h5dev

```
运行 Service `kubectl apply -f pod-sh5.yml`
查看 `kubectl get services`

### 应用

[5分钟搞定在k8s上部署jenkins，并提供域名访问](https://mp.weixin.qq.com/s?__biz=MjM5MzU5NDYwNA==&mid=2247485698&idx=2&sn=5b2f74a8f0f1d9e383e34da2964e35a3&chksm=a695e48191e26d97d33573cea4cd9d2a1cef463785acd7c7b0ee889e4556839bf9ca5ffdd9f7&scene=21#wechat_redirect)

Github上的一个项目：
[Jenkins plugin to run dynamic agents in a Kubernetes/Docker environment](https://github.com/jenkinsci/kubernetes-plugin)

上面提供了jenkins在kubernetes中容器化的部署方式，以及yaml文件，现在直接 git clone 下来。在部署好k8s平台上安装 jenkins
```bash
git clone https://github.com/jenkinsci/kubernetes-plugin.git
cd kubernetes-plugin
# 配置 minikube refe: https://github.com/jenkinsci/kubernetes-plugin#configuration-on-minikube
# 客户端证书需要转换为PKCS(公共秘钥)
openssl pkcs12 -export -out ~/.minikube/minikube.pfx -inkey ~/.minikube/apiserver.key -in ~/.minikube/apiserver.crt -certfile ~/.minikube/ca.crt -passout pass:secret
# 检验 认证是否生效
curl --cacert ~/.minikube/ca.crt --cert ~/.minikube/minikube.pfx:secret --cert-type P12 https://$(minikube ip):8443
```

在 minikube 中运行
```bash
minikube start
# 创建命名空间和Service
kubectl create namespace kubernetes-plugin
kubectl config set-context $(kubectl config current-context) --namespace=kubernetes-plugin
kubectl create -f src/main/kubernetes/service-account.yml
kubectl create -f src/main/kubernetes/jenkins.yml

# 获取访问url
minikube service jenkins --namespace kubernetes-plugin
```
在dashboard中访问，会看到 Pods 的状态是 `Failed` , 查看日志排查错误，如果日志正常，只需要访问 `http://<master_ip>:8080` 安装 Jenkins。如果不正常，需要根据日志 Google 排查问题。
