(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{356:function(e,s,n){"use strict";n.r(s);var t=n(7),a=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"如何写一个cli工具并发布npm包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何写一个cli工具并发布npm包"}},[e._v("#")]),e._v(" 如何写一个cli工具并发布npm包")]),e._v(" "),s("ol",[s("li",[e._v("注册 npm 账号")]),e._v(" "),s("li",[e._v("本地初始化一个 npm 项目 "),s("code",[e._v("npm init -y")])]),e._v(" "),s("li",[e._v("本地测试 "),s("code",[e._v("npm link")]),e._v(" 把cli命令链接到环境变量中")]),e._v(" "),s("li",[e._v("本地执行 "),s("code",[e._v("cli xx")]),e._v(" 命令，有问题，继续改；没问题，增加 "),s("code",[e._v("README.md")]),e._v(" 项目说明文件，准备提交")]),e._v(" "),s("li",[s("code",[e._v("npm login")]),e._v(" 登录 npm 仓库")]),e._v(" "),s("li",[s("code",[e._v("npm publish")]),e._v(" 提交到 npm 仓库")])]),e._v(" "),s("blockquote",[s("p",[e._v("写的一些"),s("RouterLink",{attrs:{to:"/zh/tools/efficient.html#自己写的小工具"}},[e._v("小工具")])],1)]),e._v(" "),s("p",[s("strong",[e._v("遇到问题")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("npm publish 发布遇到问题")])]),e._v(" "),s("li",[e._v("npm login 登录错误 426")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm ERR! code E426\nnpm ERR! 426 Upgrade Required - PUT http://registry.npmjs.org/-/user/org.couchdb.user:hotsuitor\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("需要设置 "),s("code",[e._v("registry")]),e._v(" 地址 而且是需要 "),s("code",[e._v("https")]),e._v("，")]),e._v(" "),s("blockquote",[s("p",[e._v("有坑：这里设置成 "),s("code",[e._v("http")]),e._v(" 地址的仓库地址还是会报同样的错误")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm config set registry https://registry.npmjs.org/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("npm publish 发布错误 403")])]),e._v(" "),s("p",[e._v("发布公开版本包")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm publish --access publish\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("提示错误，没有权限提交到这个包仓库")]),e._v(" "),s("p",[e._v("原因是这个公开的包名已被占用")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('npm ERR! code E403\nnpm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/upload-dist - You do not have permission to publish "upload-dist". Are you logged in as the correct user?\nnpm ERR! 403 In most cases, you or one of your dependencies are requesting\nnpm ERR! 403 a package version that is forbidden by your security policy, or\nnpm ERR! 403 on a server you do not have access to.\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("修改带作用域的报名再次发布，在报名前加上用户名作用域 "),s("code",[e._v("@username/packagename")]),e._v("\nusername不能随便写，只能是当前用户的username，不然也会出现 403 无权限的错误")]),e._v(" "),s("p",[s("code",[e._v("package.json")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n    "name": "@hotsuitor/upload-dist",\n    ...\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("code",[e._v("npm whoami")]),e._v(" 可以查看当前用户名")]),e._v(" "),s("p",[e._v("最后 "),s("code",[e._v("npm publish --access publish")]),e._v(" 发布成功")]),e._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000017477077",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm发布包教程（四）：迭代"),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://www.cnblogs.com/thyshare/p/13983462.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm 发布包遇到的问题"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);