# prettier 代码格式化
> 详情参考官网：https://prettier.io/

## 实践
> 在一个老旧项目配置 prettier 格式化旧项目的代码，达到维护风格统一的目的

## 1.安装
```
yarn add -D prettier
```
> 建议在当前项目安装，但也可以全局安装 `npm install -g prettier`

## 2.配置
在项目根目录新建 `.prettierc` 文件，编辑规则参考官网，例子如下：
```json
{
  "parser": "babel",
  "trailingComma": "es5",
  "semi": true,
  "tabWidth": 2,
  "printWidth": 210,
  "useTabs": false,
  "singleQuote": true,
  "endOfLine": "lf",
  "overrides": [
    {
      "files": ["*.html"],
      "options": {
        "parser": "html"
      }
    },
    {
      "files": ["*.css"],
      "options": {
        "parser": "css"
      }
    },
    {
      "files": ["*.less"],
      "options": {
        "parser": "less"
      }
    }
  ]
}
```
> 该文件是格式化配置文件，配置多少个空格，多长换行，都在这里配置

项目是用 angularjs + less +gulp 写的，这里配置了不同文件的格式化解析器，可以定制不同文件类型格式化不同的风格。

### 配置命令
为了方便使用，把格式化命令写成 npm 脚本。当然每次单独写命令执行也是可以的。
```json
"scripts": {
 "fix": "npx prettier --write js/*.js component/** less/** *.html"
}
```
> 查看帮助命令 prettier --help
`--write` 参数是编辑源文件的意思，就是把源文件编辑格式化

本地有一些第三方的库文件，不想被格式化，可以在根目录配置 `.prettierignore` 文件：
```
*.min.js
*.handle.js
*.min.css
lib/
node_modules/
data/
dist/
```

### 执行格式化
```sh
yarn fix
```
再看源码文件，会发现文件被格式化了。
如果格式化过程中有出错的文件，查看提示，一般会报一些错误，比如：
格式化 html 文件，会提示，哪里少了一个闭合标签之类的。
修改好错误后，重新格式化一次，直至没有错误提示，至此，项目风格统一工作完成。


---
### 配合 ESLint 使用

安装

`prettier-eslint-cli` prettier eslint cli 工具

```sh
yarn add -D prettier-eslint-cli eslint-config-prettier eslint-plugin-prettier
```

`.eslintrs.sj` 配置
```js
{
  extends: [
    'eslint-config-prettier' // 配置 prettier 格式化规则
  ],
  plugins: [
    'prettier', // 支持 prettier 格式化
    'eslint-plugin-prettier' // prettier 按照 eslint 规则格式化需要用到的插件
  ]
}
```

格式化命令
```sh
prettier-eslint --write "src/**/*.js" "src/**/*.vue"
```

配置到 `package.json`
```json
{
  "script": {
     "format": "prettier-eslint --write \"src/**/*.js\" \"src/**/*.vue\""
  }
}
```

## 3.配置 git hook
### 配置 `git hooks` 安装 `husky` @7 钩子+`lint-staged` @12 格式化缓冲区的内容

1. git 版本 > 2.9.0
2. `npm install husky --save-dev` **在windows下我遇到不生效的问题，有资料显示，windows下用的是全局 husky，需要全局安装**，或者 执行`node_modules`下的 `husky` 官方有资料，没仔细看。
    - > For Windows users, if you see the help message when running `npx husky add ...`, try `node node_modules/.bin/husky add ... `instead. This isn't an issue with husky code.
    1. 启用 git hooks `npx husky install`，默认会在项目根目录下初始化一个 `.husky` 目录
    2. 创建钩子
    ```sh
    npx husky add .husky/pre-commit "npm test"
    git add .husky/pre-commit
    ```
    3. try a commit
    ```sh
    git commit -m "Keep clam and commit"
    ```
    4. hook 可以放到专职配置文件中， create a config file `.huskyrc.json` in root folder
    ```json
    {
        "hook": {
            "pre-commit": "npm test"
        }
    }
    ```

3. `npm install lint-staged -D`
    1. 创建配置文件 `.lintstaged.json`
    ```json
    {
      "*.{js,mjs,wxml,json,md}": ["prettier -c --write"],
      "*.{scss, wxss}": ["stylelint --syntax=scss --fix"]
    }
    ```
4. 更新 husky 配置，仅对缓存内容执行 hooks 操作
```sh
#let pre-commit hook call lint-staged
npx husky set .husky/pre-commit "npx lint-staged"
```
> 也可以直接 修改 `.husky/pre-commit` 文件

5. 尝试 commit，验证 hooks 是否生效


### 规范 commit message 提交

1. global install Commitizen 是一个帮助撰写规范 commit message 的工具。他有一个命令行工具 [cz-cli](https://github.com/commitizen/cz-cli)
```sh
// 全局安装 Commitizen
npm install -g commitizen
```


全局安装 Commitizen 后，用 cz-conventional-changelog 适配器来初始化你的项目
```sh
// 初始化 cz-conventional-changelog 适配器
commitizen init cz-conventional-changelog --save-dev --save-exact
```
初始化做了3件事
- 安装 cz-conventional-changelog 依赖
- 把依赖保存到 package.json 的 dependencies 或 devDependencies 中
- 在根目录的 package.json 中 添加如下所示的 config.commitizen

或者，在项目根目录新建一个 `.czrc`
```json
{
  "path": "cz-conventional-changelog"
}
```
执行  `git cz` 效果：

![image.png](https://note.youdao.com/yws/res/e/WEBRESOURCE60e19bc45816f5c4a7366e4f2fa0cefe)


#### commitlint 校验提交
> [参考](https://segmentfault.com/a/1190000023388007)
> commitlint 可以检查 commit messages 是否符合常规提交格式，需要一份校验配置，推荐@commitlint/config-conventional 。

1. install commitlint @commitlint/config-conventional
```sh
npm i --save-dev @commitlint/config-conventional @commitlint/cli
```
2. 项目根目录创建 `commitlint.config.js`
```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // rules 里面可以设置一些自定义的校验规则
  rules: {},
};
```
> 注意：因为 @commitlint/config-conventional 校验规则遵循 Angular 的规范， 所以我们在用 cz-customizable 自定义中文配置时， 是按照给出的符合 Angular 规范的示例 cz-config-EXAMPLE.js 编写.cz-config.js 的。但是如果你自定义的 Commitizen 配置不符合 Angular 规范，可以使用 commitlint-config-cz 设置校验规则。（推荐还是按照 Angular 规范进行 cz-customizable 自定义配置）


一个项目应该有的配置文件
![image.png](https://note.youdao.com/yws/res/d/WEBRESOURCEbfac340103a0f804ebf737bd38a5423d)
