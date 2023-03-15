import{_ as s,X as l,Y as d,Z as n,$ as e,a1 as a,a0 as r,C as t}from"./framework-441f7d77.js";const v={},u=n("h1",{id:"jenkins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenkins","aria-hidden":"true"},"#"),e(" Jenkins")],-1),c=n("h2",{id:"安装-基于centos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-基于centos","aria-hidden":"true"},"#"),e(" 安装（基于CentOS)")],-1),o={href:"https://www.jenkins.io/zh",target:"_blank",rel:"noopener noreferrer"},m=r(`<ul><li>下载 war 包，Tomcat中运行 <code>java -jar jenkins.war --HttpPort=8080</code></li><li>yum 安装</li><li>docker 安装（推荐）</li></ul><p>根据官网安装 Docker 环境</p><blockquote><p>国内配置清华源 Fedora/CentOS/RHEL 以下内容根据 官方文档 修改而来。</p></blockquote><p>如果你之前安装过 docker，请先删掉</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token function">docker</span> docker-common docker-selinux docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装一些依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据你的发行版下载repo文件:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> /etc/yum.repos.d/docker-ce.repo https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把软件仓库地址替换为 TUNA:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s+download.docker.com+mirrors.tuna.tsinghua.edu.cn/docker-ce+&#39;</span> /etc/yum.repos.d/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后安装:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo yum makecache fast
sudo yum install docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装Jenkins</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
  <span class="token parameter variable">-u</span> root <span class="token punctuation">\\</span>
  <span class="token parameter variable">--rm</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">50000</span>:50000 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> jenkins-data:/var/jenkins_home <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token punctuation">\\</span>
  jenkinsci/blueocean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构建nodejs应用" tabindex="-1"><a class="header-anchor" href="#构建nodejs应用" aria-hidden="true">#</a> 构建nodejs应用</h2><p>安装插件：</p><ul><li>Nodejs</li><li>Git 从仓库拉取代码构建</li><li>Git Pramater 可选，用于配置选择构建不同的分支</li></ul><ol><li>创建一个任务，选择 <code>FreeStyle Project</code> 自由风格工程</li><li>配置 git 仓库，配置秘钥（或HTTPS方式的配置密码）</li><li>构建环境，选择 nodejs</li><li>构建，选择执行 shell 配置构建命令 eg: <code>npm install &amp;&amp; npm build</code> 根据实际需求配置</li><li>构建后执行，可选，可以配置部署到线上环境</li></ol><h2 id="使用pipeline方式构建vue项目应用示例" tabindex="-1"><a class="header-anchor" href="#使用pipeline方式构建vue项目应用示例" aria-hidden="true">#</a> 使用pipeline方式构建vue项目应用示例</h2><ol><li>创建项目，选择 pipeline 单分支工程</li><li>配置 pipeline 脚本，或者选择 <code>pipeline from SCM</code></li></ol><p>脚本示例：</p><div class="language-grooxy line-numbers-mode" data-ext="grooxy"><pre class="language-grooxy"><code>def url = &quot;https://oauth2:xxxxxxxxxxxxxx@gitlab.com/xxx/xxx.git&quot;
def remote_directory = &quot;/data/project/xxxx/web/&quot;
def email_from = &quot;jenkins@xxx.com&quot;
def email_to = &quot;&quot;&quot;
jenkins@xxx.com,
jenkins2@xxx.com,
&quot;&quot;&quot;

pipeline {
  agent any
  parameters {
    // 需要安装 Git Parameter Plugin
    gitParameter name: &#39;BRANCH_TAG&#39;,
                 type: &#39;PT_BRANCH_TAG&#39;,
                 branchFilter: &#39;origin/(.*)&#39;,
                 defaultValue: &#39;master&#39;,
                 selectedValue: &#39;DEFAULT&#39;,
                 sortMode: &#39;ASCENDING_SMART&#39;,
                 description: &#39;Select your branch or tag.&#39;
    choice choices: [&#39;test&#39;, &#39;uat&#39;, &#39;prod&#39;], description: &#39;请选择打包环境&#39;, name: &#39;ENV&#39;
  }
  // 需要安装 Generic Trigger Plugin
  triggers {
        GenericTrigger (
            // 构建时的标题
            causeString: &#39;Triggered by $ref&#39;,
            // 获取POST参数中的变量，key指的是变量名，通过$ref来访问对应的值，value指的是JSON匹配值（参考Jmeter的JSON提取器）
            // ref指的是推送的分支，格式如：refs/heads/master
            genericVariables: [
              [key: &#39;ref&#39;, value: &#39;$.ref&#39;],
            ],
            // 打印获取的变量的key-value，此处会打印如：ref=refs/heads/master
            printContributedVariables: true,
            // 打印POST传递的参数
            printPostContent: true,
            // regexpFilterExpression与regexpFilterExpression成对使用
            // 当两者相等时，会触发对应分支的构建
            regexpFilterExpression: &#39;^refs/heads/(master|main|develop|release.*|feature.*|hotfix.*|bugfix.*)$&#39;,
            regexpFilterText: &#39;$ref&#39;,
            // 与webhook中配置的token参数值一致
            token: &#39;admin-dist&#39;
        )
  }
  stages {
    stage(&#39;echo env&#39;) {
      steps {
        sh &#39;pwd&#39;
        sh &#39;printenv&#39;
      }
    }
    stage(&quot;hook info&quot;) {
      steps {
        sh &#39;printenv&#39;
        script {
          try{
            echo &quot;参数：$ref&quot;
            if(&quot;$ref&quot; != &quot;&quot;){
              println &quot;----------webhook式触发-----------&quot;
              // BRANCH_NAME 是多分支特有的变量
              branchName = sh(returnStdout: true, script: &#39;&#39;&#39; echo $ref | sed s#refs/heads/## &#39;&#39;&#39;).trim()
              println &quot;webhook触发的分支是: &quot; + &quot;\${branchName}&quot;
            }
          } catch(exc) {
            echo &quot;error: \${exc}&quot;
            echo &quot;BRANCH_TAG \${params.BRANCH_TAG}&quot;
            if(&quot;\${params.BRANCH_TAG}&quot; != &quot;master&quot;){
              println &quot;-----------手动方式触发------------&quot;
              branchName = &quot;\${params.BRANCH_TAG}&quot;
              println &quot;手动触发的分支是: &quot; + &quot;\${branchName}&quot;
            }
          }
          env.BRANCH_NAME = branchName
        }
      }
    }
    stage(&quot;手动参数选择分支&quot;) {
      when {
        expression { return &quot;\${branchName}&quot; != &quot;master&quot;}
      }
      steps{
        checkout([$class: &#39;GitSCM&#39;,
                          // branches: [[name: &quot;\${params.BRANCH_TAG}&quot;]],
                          branches: [[name: &quot;\${branchName}&quot;]],
                          doGenerateSubmoduleConfigurations: false,
                          extensions: [],
                          submoduleCfg: [],
                          userRemoteConfigs: [[
                            url: &quot;\${url}&quot;,
                            // credentialsId: &#39;for_gitlab&#39;,
                          ]]
                        ])
      }
    }
    stage(&quot;git info&quot;) {
      steps {
        script {
          //  git branch -v |grep &#39;*&#39; | cut -d &#39; &#39; -f2  // 在jenkins上执行没有正确返回当前分支名
          branch_name = sh(returnStdout: true, script: &#39;&#39;&#39; echo $ref | sed s#refs/heads/## &#39;&#39;&#39;).trim()
          commits_id = sh(returnStdout: true, script: &#39;&#39;&#39; git rev-parse HEAD &#39;&#39;&#39;).trim()
          git_url = sh(returnStdout: true, script: &#39;&#39;&#39; git remote -v | awk &#39;NR==1 {print $(NF-1)}&#39; | sed &#39;s/oauth.*@&#39;//g &#39;&#39;&#39;).trim()
          commit_log = sh(returnStdout: true, script: &#39;&#39;&#39; git log --pretty=format:&quot;%h - %an, %ar =&gt; %s&quot; | awk &#39;NR==1{print}&#39; &#39;&#39;&#39;).trim()
        }
        echo &quot;\${branch_name} \${git_url} \${commits_id} \${commit_log}&quot;
      }
    }
    stage(&#39;npm打包&#39;) {
      steps {
        //使用NodeJS的npm进行打包
        nodejs(&#39;nodejs14&#39;){
            sh &#39;&#39;&#39;
                yarn
                yarn build
              &#39;&#39;&#39;
        }
      }
    }
    stage(&#39;远程部署&#39;) {
      options {
        timeout(time: 3, unit: &#39;HOURS&#39;)
      }
      input {
        message &quot;将\${env.BRANCH_NAME}分支部署到\${ENV}环境服务器?&quot;
        ok &quot;是的&quot;
        parameters {
            booleanParam(name: &#39;IS_DEPLOY&#39;, defaultValue: true, description: &#39;打完包后，是否部署到服务器?&#39;)
        }
      }

      when { expression { return ENV != &quot;prod&quot; } } // 非 prod 环境，执行以下脚本
      steps {
        script { // 引用ENV变量进行一个逻辑判断提示
          if ( ENV == &quot;test&quot; ) {
            HOST = &quot;192.168.4.152&quot;
            remote_directory = &quot;/data/project/xxx/web/&quot;
          } else if ( ENV == &quot;uat&quot; ) {
            HOST = &quot;192.168.4.42&quot;
            remote_directory = &quot;/home/xxx/web/&quot;
          }
          echo &quot;server: \${HOST} address: \${remote_directory}&quot;
          //远程调用进行项目部署
          // *.js      所有js文件
          // *          只传输文件，文件夹不会传输
          // **         所有文件
          sshPublisher(publishers: [sshPublisherDesc(configName: &quot;\${HOST}&quot;,
                                                     transfers: [sshTransfer( cleanRemote: true,
                                                                               excludes: &#39;&#39;,
                                                                               execCommand: &#39;&#39;,
                                                                               execTimeout: 120000,
                                                                               flatten: false,
                                                                               makeEmptyDirs: false,
                                                                               noDefaultExcludes:false,
                                                                               patternSeparator: &#39;[, ]+&#39;,
                                                                               remoteDirectory: &quot;\${remote_directory}&quot;,
                                                                               remoteDirectorySDF: false,
                                                                               removePrefix: &#39;dist/&#39;,
                                                                               sourceFiles: &#39;dist/**&#39;)],
                                                      usePromotionTimestamp: false,
                                                      useWorkspaceInPromotion: false,
                                                      verbose: true)])


        }
      }
    }
    stage(&quot;chore&quot;) {
      steps {
        script {
          echo &quot;已经部署到\${ENV}环境&quot;
          if ( ENV == &#39;prod&#39; ) {
            echo &quot;生成环境部署不可用，只能模拟打包&quot;
            // catchError(buildResult: &#39;SUCCESS&#39;, stageResult: &#39;FAILURE&#39;) {
            //   sh &quot;exit 1&quot;
            // }
          }
        }
        sh &quot;&quot;&quot;
        pwd
        tar -zcf admin-dist.tar.gz -C dist . # 打包dist目录的内容，不包括dist目录自身
        ls -al dist* admin-dist*
        &quot;&quot;&quot;
      }
    }
  }
  post {
    success {
      script {
        echo &#39;恭喜您，构建成功！！！&#39;
        // emailNotify(&quot;构建成功&quot;, &quot;color:green;&quot;)
        weiXinNotify()
        archiveArtifacts artifacts: &#39;admin-dist*.gz&#39;,
                          allowEmptyArchive: true,
                          fingerprint: true,
                          onlyIfSuccessful: true
      }
    }
    failure {
      script {
        echo &#39;抱歉，构建失败！！！&#39;
        // emailNotify(&#39;构建失败&#39;, &#39;color:red;&#39;)
        weiXinNotify()
      }
    }
  }
}


// 邮件通知
def emailNotify(TITLE_TXT, color_style) {
  // TITLE_TXT = &#39;构建成功&#39;
  // color_style = &#39;color:green;&#39;
  email_subject = &quot;\${env.BUILD_TAG} \${ENV}环境 \${TITLE_TXT}&quot;
  email_body = &quot;&quot;&quot;
  &lt;div&gt;
  &lt;h1&gt;CI报告&lt;/h1&gt;
  &lt;h2&gt;(本邮件是程序自动下发，请勿回复！)&lt;/h2&gt;
  &lt;div&gt;
      &lt;h2&gt;Jenkins 运行结果&lt;/h2&gt;
      &lt;ul&gt;
      &lt;li&gt;jenkins的执行结果 : &lt;strong style=&quot;\${color_style}&quot;&gt;jenkins \${TITLE_TXT}&lt;/strong&gt;&lt;/li&gt;
      &lt;li&gt;构建环境  : &lt;strong&gt;\${ENV}&lt;/strong&gt;&lt;/li&gt;
      &lt;li&gt;jenkins项目名称 : &lt;strong&gt;\${env.JOB_NAME}&lt;/strong&gt;&lt;/li&gt;
      &lt;li&gt;jenkins的打包tag : &lt;strong&gt;\${env.BUILD_TAG}&lt;/strong&gt;&lt;/li&gt;
      &lt;li&gt;jenkins的Job编号 : &lt;strong&gt;\${env.BUILD_NUMBER}&lt;/strong&gt;&lt;/li&gt;
      &lt;li&gt;jenkins的URL : &lt;a href=&quot;\${env.BUILD_URL}&quot;&gt;\${env.BUILD_URL}&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;Job URL : &lt;a href=&quot;\${env.JOB_URL}&quot;&gt;\${env.JOB_URL}&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;构建日志：&lt;a href=&quot;\${BUILD_URL}console&quot;&gt;\${BUILD_URL}console&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;变更历史：&lt;a href=&quot;\${BUILD_URL}changes&quot;&gt;\${BUILD_URL}changes&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div&gt;
  &lt;h2&gt;GIT 信息&lt;/h2&gt;
  &lt;ul&gt;
      &lt;li&gt;GIT项目的地址 : &lt;a href=&quot;\${git_url}&quot;&gt;\${git_url}&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;GIT项目构建 : &lt;strong&gt;\${env.BRANCH_TAG}&lt;/strong&gt;&lt;/li&gt;
      &lt;li&gt;GIT最后一次提交 : &lt;strong&gt;\${commit_log}&lt;/strong&gt;&lt;/li&gt;
  &lt;/ul&gt;
  &lt;/div&gt;
  &lt;/div&gt;
  &quot;&quot;&quot;
  mail subject: email_subject,
        body: email_body,
        charset: &#39;utf-8&#39;,
        from: &quot;\${email_from}&quot;,
        mimeType: &#39;text/html&#39;,
        to: &quot;\${email_to}&quot;
}

// 企业微信机器人通知
def weiXinNotify(){
    // 不明文显示敏感信息，在全局-凭证管理中设置
    // withCredentials([string(credentialsId: &#39;8adc7117-1d83-4ef4-9e6b-4b827b3ecc4a&#39;, variable: &#39;TOKEN&#39;)]){
      sh &quot;&quot;&quot;
          curl --location --request POST &#39;https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=1d567052-a6e5-482a-8684-8ae9893c51a9&#39; \\
              --header &#39;Content-Type: application/json&#39; \\
              --data &#39;{
                  &quot;msgtype&quot;: &quot;markdown&quot;,
                  &quot;markdown&quot;: {
                      &quot;content&quot;: &quot;## \${JOB_NAME} 作业构建信息: \\n### 构建人：\${env.BUILD_USER} \\n### 构建环境：\${params.ENV} \\n### 构建分支：\${branchName} \\n### 作业状态： \${currentBuild.currentResult} \\n### 最后记录：\${commit_log} \\n### 运行时长： \${currentBuild.durationString} \\n###### 更多详细信息点击 [构建日志](\${BUILD_URL}/console) \\n&quot;
                  }
              }&#39;
      &quot;&quot;&quot;
    // }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function b(p,g){const i=t("ExternalLinkIcon");return l(),d("div",null,[u,c,n("p",null,[n("a",o,[e("官网教程"),a(i)]),e(" 三种安装方式")]),m])}const q=s(v,[["render",b],["__file","jenkins.html.vue"]]);export{q as default};
