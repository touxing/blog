(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{493:function(e,s,n){"use strict";n.r(s);var t=n(24),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"如何写一个cli工具并发布npm包"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何写一个cli工具并发布npm包"}},[e._v("#")]),e._v(" 如何写一个cli工具并发布npm包")]),e._v(" "),n("ol",[n("li",[e._v("注册 npm 账号")]),e._v(" "),n("li",[e._v("本地初始化一个 npm 项目 "),n("code",[e._v("npm init -y")])]),e._v(" "),n("li",[e._v("本地测试 "),n("code",[e._v("npm link")]),e._v(" 把cli命令链接到环境变量中")]),e._v(" "),n("li",[e._v("本地执行 "),n("code",[e._v("cli xx")]),e._v(" 命令，有问题，继续改；没问题，增加 "),n("code",[e._v("README.md")]),e._v(" 项目说明文件，准备提交")]),e._v(" "),n("li",[n("code",[e._v("npm login")]),e._v(" 登录 npm 仓库")]),e._v(" "),n("li",[n("code",[e._v("npm publish")]),e._v(" 提交到 npm 仓库")])]),e._v(" "),n("blockquote",[n("p",[e._v("写的一些"),n("RouterLink",{attrs:{to:"/zh/tools/efficient.html#自己写的小工具"}},[e._v("小工具")])],1)]),e._v(" "),n("p",[n("strong",[e._v("遇到问题")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("npm publish 发布遇到问题")])]),e._v(" "),n("li",[e._v("npm login 登录错误 426")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm ERR! code E426\nnpm ERR! 426 Upgrade Required - PUT http://registry.npmjs.org/-/user/org.couchdb.user:hotsuitor\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("需要设置 "),n("code",[e._v("registry")]),e._v(" 地址 而且是需要 "),n("code",[e._v("https")]),e._v("，")]),e._v(" "),n("blockquote",[n("p",[e._v("有坑：这里设置成 "),n("code",[e._v("http")]),e._v(" 地址的仓库地址还是会报同样的错误")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm config set registry https://registry.npmjs.org/\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ul",[n("li",[e._v("npm publish 发布错误 403")])]),e._v(" "),n("p",[e._v("发布公开版本包")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("npm publish --access publish\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("提示错误，没有权限提交到这个包仓库")]),e._v(" "),n("p",[e._v("原因是这个公开的包名已被占用")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('npm ERR! code E403\nnpm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/upload-dist - You do not have permission to publish "upload-dist". Are you logged in as the correct user?\nnpm ERR! 403 In most cases, you or one of your dependencies are requesting\nnpm ERR! 403 a package version that is forbidden by your security policy, or\nnpm ERR! 403 on a server you do not have access to.\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("修改带作用域的报名再次发布，在报名前加上用户名作用域 "),n("code",[e._v("@username/packagename")]),e._v("\nusername不能随便写，只能是当前用户的username，不然也会出现 403 无权限的错误")]),e._v(" "),n("p",[n("code",[e._v("package.json")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n    "name": "@hotsuitor/upload-dist",\n    ...\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[n("code",[e._v("npm whoami")]),e._v(" 可以查看当前用户名")]),e._v(" "),n("p",[e._v("最后 "),n("code",[e._v("npm publish --access publish")]),e._v(" 发布成功")]),e._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000017477077",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm发布包教程（四）：迭代"),n("OutboundLink")],1),e._v(" "),n("a",{attrs:{href:"https://www.cnblogs.com/thyshare/p/13983462.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm 发布包遇到的问题"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=a.exports}}]);