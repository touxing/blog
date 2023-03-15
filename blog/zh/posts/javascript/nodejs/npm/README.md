# 如何写一个cli工具并发布npm包

1. 注册 npm 账号
2. 本地初始化一个 npm 项目 `npm init -y`
3. 本地测试 `npm link` 把cli命令链接到环境变量中
4. 本地执行 `cli xx` 命令，有问题，继续改；没问题，增加 `README.md` 项目说明文件，准备提交
5. `npm login` 登录 npm 仓库
6. `npm publish` 提交到 npm 仓库


> 写的一些[小工具](/zh/tools/efficient.md#自己写的小工具)

**遇到问题**

- **npm publish 发布遇到问题**
- npm login 登录错误 426
```
npm ERR! code E426
npm ERR! 426 Upgrade Required - PUT http://registry.npmjs.org/-/user/org.couchdb.user:hotsuitor
```
需要设置 `registry` 地址 而且是需要 `https`，
> 有坑：这里设置成 `http` 地址的仓库地址还是会报同样的错误

```
npm config set registry https://registry.npmjs.org/
```

- npm publish 发布错误 403

发布公开版本包
```
npm publish --access publish
```

提示错误，没有权限提交到这个包仓库

原因是这个公开的包名已被占用
```
npm ERR! code E403
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/upload-dist - You do not have permission to publish "upload-dist". Are you logged in as the correct user?
npm ERR! 403 In most cases, you or one of your dependencies are requesting
npm ERR! 403 a package version that is forbidden by your security policy, or
npm ERR! 403 on a server you do not have access to.
```
修改带作用域的报名再次发布，在报名前加上用户名作用域 `@username/packagename`
username不能随便写，只能是当前用户的username，不然也会出现 403 无权限的错误

`package.json`
```
{
    "name": "@hotsuitor/upload-dist",
    ...
}
```

`npm whoami` 可以查看当前用户名

最后 `npm publish --access publish` 发布成功


参考资料
---
> [npm发布包教程（四）：迭代](https://segmentfault.com/a/1190000017477077)
> [npm 发布包遇到的问题](https://www.cnblogs.com/thyshare/p/13983462.html)
