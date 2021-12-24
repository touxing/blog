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
