(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{451:function(s,a,t){"use strict";t.r(a);var e=t(22),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-基础教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-基础教程"}},[s._v("#")]),s._v(" git 基础教程")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/521xueweihan/git-tips",target:"_blank",rel:"noopener noreferrer"}},[s._v("git 奇淫技巧"),t("OutboundLink")],1)])]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("缓存")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("hr"),s._v(" "),t("p",[s._v("提交")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"提交备注"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("hr"),s._v(" "),t("p",[s._v("拉取")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("hr"),s._v(" "),t("p",[s._v("推送")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"移动提交记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动提交记录"}},[s._v("#")]),s._v(" 移动提交记录")]),s._v(" "),t("h3",{attrs:{id:"cherry-pick-整理提交记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick-整理提交记录"}},[s._v("#")]),s._v(" cherry-pick(整理提交记录)")]),s._v(" "),t("p",[s._v("将一些提交复制到当前所在位置（HEAD）下面")]),s._v(" "),t("h3",{attrs:{id:"交互式-rebase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交互式-rebase"}},[s._v("#")]),s._v(" 交互式 rebase")]),s._v(" "),t("h2",{attrs:{id:"杂项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#杂项"}},[s._v("#")]),s._v(" 杂项")]),s._v(" "),t("h3",{attrs:{id:"只取一个提交记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只取一个提交记录"}},[s._v("#")]),s._v(" 只取一个提交记录")]),s._v(" "),t("p",[t("img",{attrs:{src:"/blog/img/image-20200409173846529.png",alt:"image-20200409173846529"}}),s._v(" "),t("img",{attrs:{src:"/blog/img/image-20200409173922108.png",alt:"image-20200409173922108"}})]),s._v(" "),t("p",[s._v("修复bug分支的前两个递交有一些debug代码和printf代码，而合并修复的时候不需要合并无用的代码，由图1 rebase 到图2的效果")]),s._v(" "),t("p",[s._v("本地栈式提交")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bugFix")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 交互式变基到master分支，omit C2 C3 的提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase bugFix master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再以 bugFix 为 base 变基到 master")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"提交技巧1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交技巧1"}},[s._v("#")]),s._v(" 提交技巧1")]),s._v(" "),t("blockquote",[t("p",[s._v("git rebase -i "),t("code",[s._v("<commit>")]),s._v("\ngit commit --amend")])]),s._v(" "),t("p",[s._v("充分利用 交互式 rebase ，可以修改提交顺序和 pick/omit "),t("code",[s._v("commit")])]),s._v(" "),t("h3",{attrs:{id:"提交技巧2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交技巧2"}},[s._v("#")]),s._v(" 提交技巧2")]),s._v(" "),t("blockquote",[t("p",[s._v("git  cherry-pick")]),s._v(" "),t("p",[s._v("git commit --amend")])]),s._v(" "),t("h3",{attrs:{id:"tag-打标签-里程碑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tag-打标签-里程碑"}},[s._v("#")]),s._v(" tag(打标签) 里程碑")]),s._v(" "),t("p",[s._v("查看标签")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可带上可选的 -l 选项 --list")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建标签")]),s._v(" "),t("p",[s._v("Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。")]),s._v(" "),t("p",[s._v("轻量标签很像一个不会改变的分支——它只是某个特定提交的引用。")]),s._v(" "),t("p",[s._v("而附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。 通常会建议创建附注标签，这样你可以拥有以上所有信息。但是如果你只是想用一个临时的标签， 或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。")]),s._v(" "),t("h4",{attrs:{id:"附注标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附注标签"}},[s._v("#")]),s._v(" 附注标签")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.4 -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my version 1.4"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a tag_name -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"附注信息"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"轻量标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#轻量标签"}},[s._v("#")]),s._v(" 轻量标签")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag v1.3\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git tag v1.2 20e1e412 # 指定打摸个commit的tag")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h4",{attrs:{id:"后期打标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后期打标签"}},[s._v("#")]),s._v(" 后期打标签")]),s._v(" "),t("p",[s._v("假设在 v1.2 时你忘记给项目打标签。 你可以在之后补上标签。 要在那个提交上打标签，你需要在命令的末尾指定提交的校验和（或部分校验和）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.2 9fceb02\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"共享标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#共享标签"}},[s._v("#")]),s._v(" 共享标签")]),s._v(" "),t("p",[s._v("默认情况下，"),t("code",[s._v("git push")]),s._v(" 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样——你可以运行 "),t("code",[s._v("git push origin")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.5\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果想要一次性推送很多标签，也可以使用带有 "),t("code",[s._v("--tags")]),s._v(" 选项的 "),t("code",[s._v("git push")]),s._v(" 命令。 这将会把所有不在远程仓库服务器上的标签全部传送到那里。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --tags\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"删除标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除标签"}},[s._v("#")]),s._v(" 删除标签")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git tag -d <tagname>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v1.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("删除远程仓库的标签")]),s._v(" "),t("p",[t("code",[s._v("git push origin --delete <tagname>")])]),s._v(" "),t("p",[s._v("报错的时候用这种方式，原因是有分支名和tag名重复，git不知道删除谁，用详细路径指定要删除的标签")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" :refs/tags/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tagname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"合并单个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并单个文件"}},[s._v("#")]),s._v(" 合并单个文件")]),s._v(" "),t("p",[s._v("假设有这样的需求，基于 "),t("code",[s._v("develop")]),s._v(" 分支，新建了分支A和分支B，分支A修改了 "),t("code",[s._v("function1.js")]),s._v(" "),t("code",[s._v("tools.js")]),s._v(" 文件 分支B修改了 "),t("code",[s._v("function2.js")]),s._v(" "),t("code",[s._v("function3.js")]),s._v(" 文件\n现在要紧急上线一个功能，涉及到分支A中的 "),t("code",[s._v("tools.js")]),s._v(" 文件 和分支B中的 "),t("code",[s._v("function3.js")]),s._v(" 文件，怎么办，copy，paste?")]),s._v(" "),t("p",[s._v("用单独文件 checkout 指定 commit 功能")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# develop")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout branch_A tools.js\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout branchB function3.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("develop分支中就有了最新的 "),t("code",[s._v("tools.js")]),s._v(" "),t("code",[s._v("function3.js")]),s._v(" 文件了")]),s._v(" "),t("p",[s._v("同理，单独回退文件，现在 "),t("code",[s._v("functino3.js")]),s._v(" 文件功能改错了，需要回退到 "),t("code",[s._v("3f6fe4ef")]),s._v(" 这个提交记录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout 3f6fe4ef function3.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"describe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#describe"}},[s._v("#")]),s._v(" describe")]),s._v(" "),t("p",[t("code",[s._v("git describe <ref>")])]),s._v(" "),t("p",[s._v("由于标签在代码库中起着“锚点”的作用，Git 还为此专门设计了一个命令用来"),t("strong",[s._v("描述")]),s._v("离你最近的锚点（也就是标签），它就是 "),t("code",[s._v("git describe")]),s._v("！")]),s._v(" "),t("p",[s._v("Git Describe 能帮你在提交历史中移动了多次以后找到方向；当你用 "),t("code",[s._v("git bisect")]),s._v("（一个查找产生 Bug 的提交记录的指令）找到某个提交记录时，或者是当你坐在你那刚刚度假回来的同事的电脑前时， 可能会用到这个命令。")]),s._v(" "),t("p",[s._v("当 "),t("code",[s._v("ref")]),s._v(" 提交记录上有某个标签时，则只输出标签名称")])])}),[],!1,null,null,null);a.default=r.exports}}]);