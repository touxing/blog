# Linux常用命令


## curl
> [参考](https://blog.techbridge.cc/2019/02/01/linux-curl-command-tutorial/)

`curl [options] [URL...]`
参数解释
```
-X/--request [GET|POST|PUT|DELETE|PATCH]  使用指定的 http method 來發出 http request
-H/--header 設定 request 裡所攜帶的 header
-i/--include 在 output 顯示 response 的 header
-d/--data 攜帶 HTTP POST Data
-v/--verbose 輸出更多的訊息方便 debug
-u/--user 攜帶使用者帳號、密碼
-b/--cookie 攜帶 cookie（可以是參數或是檔案位置）

-L 追踪网站重定向301/302
-O 下载，保留url文件名
-o 重命名下载
-# 显示#进度
-C 从中断的地方继续下载

```
