---
sidebar: auto
---

# git 基础教程
> [git 奇淫技巧](https://github.com/521xueweihan/git-tips)

---
缓存
```bash
git add .
```

---
提交
```bash
git commit -m "提交备注"
```

---
拉取
```bash
git pull [<remote>] [<branch>]
```
---
推送
```bash
git push [<remote>] [<branch>]
```

## 移动提交记录

### cherry-pick(整理提交记录)
将一些提交复制到当前所在位置（HEAD）下面

### 交互式 rebase

## 杂项

### 只取一个提交记录

![image-20200409173846529](/blog/img/image-20200409173846529.png)
![image-20200409173922108](/blog/img/image-20200409173922108.png)

修复bug分支的前两个递交有一些debug代码和printf代码，而合并修复的时候不需要合并无用的代码，由图1 rebase 到图2的效果

本地栈式提交

```bash
# bugFix
git rebase -i master # 交互式变基到master分支，omit C2 C3 的提交
git rebase bugFix master # 再以 bugFix 为 base 变基到 master
```


### 提交技巧1

> git rebase -i `<commit>`
> git commit --amend

充分利用 交互式 rebase ，可以修改提交顺序和 pick/omit `commit`

### 提交技巧2

> git  cherry-pick
>
> git commit --amend



### tag(打标签) 里程碑

查看标签

```bash
git tag # 可带上可选的 -l 选项 --list
```



创建标签

Git 支持两种标签：轻量标签（lightweight）与附注标签（annotated）。

轻量标签很像一个不会改变的分支——它只是某个特定提交的引用。

而附注标签是存储在 Git 数据库中的一个完整对象， 它们是可以被校验的，其中包含打标签者的名字、电子邮件地址、日期时间， 此外还有一个标签信息，并且可以使用 GNU Privacy Guard （GPG）签名并验证。 通常会建议创建附注标签，这样你可以拥有以上所有信息。但是如果你只是想用一个临时的标签， 或者因为某些原因不想要保存这些信息，那么也可以用轻量标签。



#### 附注标签

```bash
git tag -a v1.4 -m "my version 1.4"
git tag -a tag_name -m "附注信息"
```



#### 轻量标签

```bash
git tag v1.3
# git tag v1.2 20e1e412 # 指定打摸个commit的tag
```



#### 后期打标签

假设在 v1.2 时你忘记给项目打标签。 你可以在之后补上标签。 要在那个提交上打标签，你需要在命令的末尾指定提交的校验和（或部分校验和）：

```bash
git tag -a v1.2 9fceb02
```



#### 共享标签

默认情况下，`git push` 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样——你可以运行 `git push origin `。

```bash
git push origin v1.5
```

如果想要一次性推送很多标签，也可以使用带有 `--tags` 选项的 `git push` 命令。 这将会把所有不在远程仓库服务器上的标签全部传送到那里。

```bash
git push origin --tags
```



#### 删除标签

```bash
# git tag -d <tagname>
git tag -d v1.2
```

删除远程仓库的标签

`git push origin --delete <tagname>`

报错的时候用这种方式，原因是有分支名和tag名重复，git不知道删除谁，用详细路径指定要删除的标签

```bash
git push <remote> :refs/tags/<tagname>
```

### 合并单个文件
假设有这样的需求，基于 `develop` 分支，新建了分支A和分支B，分支A修改了 `function1.js` `tools.js` 文件 分支B修改了 `function2.js` `function3.js` 文件
现在要紧急上线一个功能，涉及到分支A中的 `tools.js` 文件 和分支B中的 `function3.js` 文件，怎么办，copy，paste?

用单独文件 checkout 指定 commit 功能
```bash
# develop
git checkout branch_A tools.js
git checkout branchB function3.js
```
develop分支中就有了最新的 `tools.js` `function3.js` 文件了

同理，单独回退文件，现在 `functino3.js` 文件功能改错了，需要回退到 `3f6fe4ef` 这个提交记录
```bash
git checkout 3f6fe4ef function3.js
```



### describe

`git describe <ref>`

由于标签在代码库中起着“锚点”的作用，Git 还为此专门设计了一个命令用来**描述**离你最近的锚点（也就是标签），它就是 `git describe`！

Git Describe 能帮你在提交历史中移动了多次以后找到方向；当你用 `git bisect`（一个查找产生 Bug 的提交记录的指令）找到某个提交记录时，或者是当你坐在你那刚刚度假回来的同事的电脑前时， 可能会用到这个命令。

当 `ref` 提交记录上有某个标签时，则只输出标签名称


## git svn

git 操作 svn 仓库

> git svn 是Subversion和Git之间变更集的简单管道。它提供Subversion和Git存储库之间的双向变化流。

`git help svn` 查看帮助命令

`git svn help` 查看帮助参数

clone svn repository
```sh
git svn clone [-s|--stdlayout 默认标准目录] [-r100:HEAD 指定记录] svn_repository_url
```

如果 svn 仓库不是标准的（trunk/branches/tags） 目录结构，需要指定参数
`-T/--trunk=<trunk_dir> -b/--branches=<branches_dir> -t/--tags=<tags_dir>`

如果一个 svn 仓库很多记录，clone 会非常费时。可以指定提交记录 clone
`-rxxx:HEAD`

正常 git 操作
git add .
git commit -m "message"

可选，拉取 svn repository
```sh
git svn rebase # => git fetch and git merge
```

推送更新 svn repository
```sh
git svn dcommit [trunk 可选指定分支]
```
