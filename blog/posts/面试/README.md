---
title: 常见面试题
date: 2020-11-15
icon: exercise
category:
  - 面试
tag:
  - 面试
dir:
  order: 8
---

## 原型

## 闭包
为了解决私有方法和变量的作用域问题

```js
function test() {
  var age = 18
  function addAge() {
    age++
    console.log(age)
  }
  return addAge
}

var fn = test()
fn() // print 19
```

特性：
- 函数嵌套函数
- 内部函数可以引用外部函数的参数和变量
- 参数和变量不会被垃圾回收机制回收

好处：
1. 希望变量长期存储在内存中
2. 避免全局变量污染
3. 私有成员的存在

缺点：
1. 常驻内存，增加内存使用量
2. 使用不当导致内存泄漏

避免内存泄漏的方法，在不需要闭包的时候手动释放
```js
fn = null
// 设为null，让GC自动回收
```



## 存储

### cookie
存储大小一般是 4k
按域名存储，存在跨域问题
可设置过期时间

### web storage
- localStorage 本地持久化存储 除非主动删除数据，否则数据永不过期
- sessionStorage 会话级别存储，会话结束，数据销毁

**与cookie的区别**
cookie
    - 大小受限，每次请求新的页面 `cookie` 会被发送过去，浪费宽带
    - 需要指定作用域，不可跨域使用

storage
    - 存储大
    - 不需要指定作用域，直接使用





##

>参考资料：[https://juejin.im/post/5e8b163ff265da47ee3f54a6](https://juejin.im/post/5e8b163ff265da47ee3f54a6)
