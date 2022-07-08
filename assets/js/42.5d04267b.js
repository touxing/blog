(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{322:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),t("h2",{attrs:{id:"一次性部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一次性部署"}},[s._v("#")]),s._v(" 一次性部署")]),s._v(" "),t("blockquote",[t("p",[s._v("不适合项目开发\n手工打包，把dist直接copy到远程服务器")])]),s._v(" "),t("h2",{attrs:{id:"自动化部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署"}},[s._v("#")]),s._v(" 自动化部署")]),s._v(" "),t("h3",{attrs:{id:"jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins"}},[s._v("#")]),s._v(" Jenkins")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://jenkins.io/zh",target:"_blank",rel:"noopener noreferrer"}},[s._v("中文官网"),t("OutboundLink")],1)])]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/zh/deploy/jenkins/"}},[s._v("jenkins")])],1),s._v(" "),t("h3",{attrs:{id:"travis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#travis"}},[s._v("#")]),s._v(" Travis")]),s._v(" "),t("blockquote",[t("p",[s._v("一款CI工具")])]),s._v(" "),t("h3",{attrs:{id:"buddy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#buddy"}},[s._v("#")]),s._v(" Buddy")]),s._v(" "),t("blockquote",[t("p",[s._v("一款CI工具")])]),s._v(" "),t("h2",{attrs:{id:"docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" "),t("RouterLink",{attrs:{to:"/zh/deploy/docker/"}},[s._v("Docker")])],1),s._v(" "),t("h2",{attrs:{id:"k8s"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#k8s"}},[s._v("#")]),s._v(" k8s")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/zh/deploy/k8s/"}},[s._v("kubernetes")])],1),s._v(" "),t("h2",{attrs:{id:"工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),t("p",[s._v("终端连接工具\nputty + "),t("a",{attrs:{href:"https://ttyplus.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mtputty"),t("OutboundLink")],1),s._v("(开启多标签功能)")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("s",[s._v("本博客部署采用 "),t("code",[s._v("Travis")]),s._v(" 构建 配置文件 "),t("code",[s._v(".travis.yml")])]),s._v("\nTravis 更新免费使用策略，需要信用卡，没卡用不了\n换 "),t("code",[s._v("Github Action")]),s._v(" 配置文件 "),t("code",[s._v(".github/workflow/deploy.yml")])]),s._v(" "),t("p",[s._v("本博客action配置参考")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Node.js CI\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("push")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" master "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# on 监听 push 动作 branches 分支")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jobs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build-and-deploy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("runs-on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Checkout\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" actions/checkout@v2\n\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Build\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("NODE_OPTIONS")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'--max_old_space_size=4096'")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行命令 | 可以换行执行命令")]),s._v("\n          yarn\n          yarn build\n\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署到 GitHub Pages")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deploy\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JamesIves/github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("deploy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("action@4.1.3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用别人写的action")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("with")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ACCESS_TOKEN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" secrets.ACCESS_TOKEN "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github 设置的 ACCESS_TOKEN")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("BRANCH")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" gh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("pages "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署分支")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("FOLDER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" docs/.vuepress/dist "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打包目录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("p",[s._v("参考：\n"),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰老师的博客 《GitHub Actions 入门教程》"),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://docs.github.com/en/actions",target:"_blank",rel:"noopener noreferrer"}},[s._v("Github Action 官方教程"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"gitlab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gitlab"}},[s._v("#")]),s._v(" GitLab")]),s._v(" "),t("p",[s._v("尝试 GitLab 的 "),t("code",[s._v("CI/CD")]),s._v(" 功能")]),s._v(" "),t("p",[s._v("准备：")]),s._v(" "),t("ol",[t("li",[s._v("创建 "),t("code",[s._v(".gitlab-ci.yml")]),s._v(" 文件")]),s._v(" "),t("li",[s._v("install runner and config runner")])]),s._v(" "),t("h4",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" build\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" deploy\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build stage")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build_app")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" build\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("only")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" master\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm install\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" npm run build\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" node_modules/\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("artifacts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("paths")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build folder")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dist/\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expire_in")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 1 hour\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# production stage")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("production")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("stage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" deploy\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("before_script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mkdir "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p ~/.ssh\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('e "$SSH_PRIVATE_KEY" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" ~/.ssh/id_rsa\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" chmod 600 ~/.ssh/id_rsa\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[[ -f /.dockerenv ]] && echo -e \"Host *\\n\\tStrictHostKeyChecking no\\n\\n\" > ~/.ssh/config'")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" scp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("r dist/* username@server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("address"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/www/html/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("blockquote",[t("p",[s._v("参考：https://shouts.dev/articles/build-and-auto-deploy-vuejs-app-to-server-using-gitlab-ci-cd")])])])}),[],!1,null,null,null);t.default=e.exports}}]);