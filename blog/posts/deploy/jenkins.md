---
title: Jenkins
date: 2022-11-25
icon: customize
category:
  - 部署
tag:
  - Jenkins
---
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

## 使用pipeline方式构建vue项目应用示例

1. 创建项目，选择 pipeline 单分支工程
2. 配置 pipeline 脚本，或者选择 `pipeline from SCM`

脚本示例：

```grooxy
def url = "https://oauth2:xxxxxxxxxxxxxx@gitlab.com/xxx/xxx.git"
def remote_directory = "/data/project/xxxx/web/"
def email_from = "jenkins@xxx.com"
def email_to = """
jenkins@xxx.com,
jenkins2@xxx.com,
"""

pipeline {
  agent any
  parameters {
    // 需要安装 Git Parameter Plugin
    gitParameter name: 'BRANCH_TAG',
                 type: 'PT_BRANCH_TAG',
                 branchFilter: 'origin/(.*)',
                 defaultValue: 'master',
                 selectedValue: 'DEFAULT',
                 sortMode: 'ASCENDING_SMART',
                 description: 'Select your branch or tag.'
    choice choices: ['test', 'uat', 'prod'], description: '请选择打包环境', name: 'ENV'
  }
  // 需要安装 Generic Trigger Plugin
  triggers {
        GenericTrigger (
            // 构建时的标题
            causeString: 'Triggered by $ref',
            // 获取POST参数中的变量，key指的是变量名，通过$ref来访问对应的值，value指的是JSON匹配值（参考Jmeter的JSON提取器）
            // ref指的是推送的分支，格式如：refs/heads/master
            genericVariables: [
              [key: 'ref', value: '$.ref'],
            ],
            // 打印获取的变量的key-value，此处会打印如：ref=refs/heads/master
            printContributedVariables: true,
            // 打印POST传递的参数
            printPostContent: true,
            // regexpFilterExpression与regexpFilterExpression成对使用
            // 当两者相等时，会触发对应分支的构建
            regexpFilterExpression: '^refs/heads/(master|main|develop|release.*|feature.*|hotfix.*|bugfix.*)$',
            regexpFilterText: '$ref',
            // 与webhook中配置的token参数值一致
            token: 'admin-dist'
        )
  }
  stages {
    stage('echo env') {
      steps {
        sh 'pwd'
        sh 'printenv'
      }
    }
    stage("hook info") {
      steps {
        sh 'printenv'
        script {
          try{
            echo "参数：$ref"
            if("$ref" != ""){
              println "----------webhook式触发-----------"
              // BRANCH_NAME 是多分支特有的变量
              branchName = sh(returnStdout: true, script: ''' echo $ref | sed s#refs/heads/## ''').trim()
              println "webhook触发的分支是: " + "${branchName}"
            }
          } catch(exc) {
            echo "error: ${exc}"
            echo "BRANCH_TAG ${params.BRANCH_TAG}"
            if("${params.BRANCH_TAG}" != "master"){
              println "-----------手动方式触发------------"
              branchName = "${params.BRANCH_TAG}"
              println "手动触发的分支是: " + "${branchName}"
            }
          }
          env.BRANCH_NAME = branchName
        }
      }
    }
    stage("手动参数选择分支") {
      when {
        expression { return "${branchName}" != "master"}
      }
      steps{
        checkout([$class: 'GitSCM',
                          // branches: [[name: "${params.BRANCH_TAG}"]],
                          branches: [[name: "${branchName}"]],
                          doGenerateSubmoduleConfigurations: false,
                          extensions: [],
                          submoduleCfg: [],
                          userRemoteConfigs: [[
                            url: "${url}",
                            // credentialsId: 'for_gitlab',
                          ]]
                        ])
      }
    }
    stage("git info") {
      steps {
        script {
          //  git branch -v |grep '*' | cut -d ' ' -f2  // 在jenkins上执行没有正确返回当前分支名
          branch_name = sh(returnStdout: true, script: ''' echo $ref | sed s#refs/heads/## ''').trim()
          commits_id = sh(returnStdout: true, script: ''' git rev-parse HEAD ''').trim()
          git_url = sh(returnStdout: true, script: ''' git remote -v | awk 'NR==1 {print $(NF-1)}' | sed 's/oauth.*@'//g ''').trim()
          commit_log = sh(returnStdout: true, script: ''' git log --pretty=format:"%h - %an, %ar => %s" | awk 'NR==1{print}' ''').trim()
        }
        echo "${branch_name} ${git_url} ${commits_id} ${commit_log}"
      }
    }
    stage('npm打包') {
      steps {
        //使用NodeJS的npm进行打包
        nodejs('nodejs14'){
            sh '''
                yarn
                yarn build
              '''
        }
      }
    }
    stage('远程部署') {
      options {
        timeout(time: 3, unit: 'HOURS')
      }
      input {
        message "将${env.BRANCH_NAME}分支部署到${ENV}环境服务器?"
        ok "是的"
        parameters {
            booleanParam(name: 'IS_DEPLOY', defaultValue: true, description: '打完包后，是否部署到服务器?')
        }
      }

      when { expression { return ENV != "prod" } } // 非 prod 环境，执行以下脚本
      steps {
        script { // 引用ENV变量进行一个逻辑判断提示
          if ( ENV == "test" ) {
            HOST = "192.168.4.152"
            remote_directory = "/data/project/xxx/web/"
          } else if ( ENV == "uat" ) {
            HOST = "192.168.4.42"
            remote_directory = "/home/xxx/web/"
          }
          echo "server: ${HOST} address: ${remote_directory}"
          //远程调用进行项目部署
          // *.js      所有js文件
          // *          只传输文件，文件夹不会传输
          // **         所有文件
          sshPublisher(publishers: [sshPublisherDesc(configName: "${HOST}",
                                                     transfers: [sshTransfer( cleanRemote: true,
                                                                               excludes: '',
                                                                               execCommand: '',
                                                                               execTimeout: 120000,
                                                                               flatten: false,
                                                                               makeEmptyDirs: false,
                                                                               noDefaultExcludes:false,
                                                                               patternSeparator: '[, ]+',
                                                                               remoteDirectory: "${remote_directory}",
                                                                               remoteDirectorySDF: false,
                                                                               removePrefix: 'dist/',
                                                                               sourceFiles: 'dist/**')],
                                                      usePromotionTimestamp: false,
                                                      useWorkspaceInPromotion: false,
                                                      verbose: true)])


        }
      }
    }
    stage("chore") {
      steps {
        script {
          echo "已经部署到${ENV}环境"
          if ( ENV == 'prod' ) {
            echo "生成环境部署不可用，只能模拟打包"
            // catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
            //   sh "exit 1"
            // }
          }
        }
        sh """
        pwd
        tar -zcf admin-dist.tar.gz -C dist . # 打包dist目录的内容，不包括dist目录自身
        ls -al dist* admin-dist*
        """
      }
    }
  }
  post {
    success {
      script {
        echo '恭喜您，构建成功！！！'
        // emailNotify("构建成功", "color:green;")
        weiXinNotify()
        archiveArtifacts artifacts: 'admin-dist*.gz',
                          allowEmptyArchive: true,
                          fingerprint: true,
                          onlyIfSuccessful: true
      }
    }
    failure {
      script {
        echo '抱歉，构建失败！！！'
        // emailNotify('构建失败', 'color:red;')
        weiXinNotify()
      }
    }
  }
}


// 邮件通知
def emailNotify(TITLE_TXT, color_style) {
  // TITLE_TXT = '构建成功'
  // color_style = 'color:green;'
  email_subject = "${env.BUILD_TAG} ${ENV}环境 ${TITLE_TXT}"
  email_body = """
  <div>
  <h1>CI报告</h1>
  <h2>(本邮件是程序自动下发，请勿回复！)</h2>
  <div>
      <h2>Jenkins 运行结果</h2>
      <ul>
      <li>jenkins的执行结果 : <strong style="${color_style}">jenkins ${TITLE_TXT}</strong></li>
      <li>构建环境  : <strong>${ENV}</strong></li>
      <li>jenkins项目名称 : <strong>${env.JOB_NAME}</strong></li>
      <li>jenkins的打包tag : <strong>${env.BUILD_TAG}</strong></li>
      <li>jenkins的Job编号 : <strong>${env.BUILD_NUMBER}</strong></li>
      <li>jenkins的URL : <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></li>
      <li>Job URL : <a href="${env.JOB_URL}">${env.JOB_URL}</a></li>
      <li>构建日志：<a href="${BUILD_URL}console">${BUILD_URL}console</a></li>
      <li>变更历史：<a href="${BUILD_URL}changes">${BUILD_URL}changes</a></li>
      </ul>
  </div>
  <div>
  <h2>GIT 信息</h2>
  <ul>
      <li>GIT项目的地址 : <a href="${git_url}">${git_url}</a></li>
      <li>GIT项目构建 : <strong>${env.BRANCH_TAG}</strong></li>
      <li>GIT最后一次提交 : <strong>${commit_log}</strong></li>
  </ul>
  </div>
  </div>
  """
  mail subject: email_subject,
        body: email_body,
        charset: 'utf-8',
        from: "${email_from}",
        mimeType: 'text/html',
        to: "${email_to}"
}

// 企业微信机器人通知
def weiXinNotify(){
    // 不明文显示敏感信息，在全局-凭证管理中设置
    // withCredentials([string(credentialsId: '8adc7117-1d83-4ef4-9e6b-4b827b3ecc4a', variable: 'TOKEN')]){
      sh """
          curl --location --request POST 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=1d567052-a6e5-482a-8684-8ae9893c51a9' \
              --header 'Content-Type: application/json' \
              --data '{
                  "msgtype": "markdown",
                  "markdown": {
                      "content": "## ${JOB_NAME} 作业构建信息: \n### 构建人：${env.BUILD_USER} \n### 构建环境：${params.ENV} \n### 构建分支：${branchName} \n### 作业状态： ${currentBuild.currentResult} \n### 最后记录：${commit_log} \n### 运行时长： ${currentBuild.durationString} \n###### 更多详细信息点击 [构建日志](${BUILD_URL}/console) \n"
                  }
              }'
      """
    // }
}

```
