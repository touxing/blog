---
date: 2020-11-23
category:
  - javascript
tag:
  - new
  - 面试
---
# 模拟实现new关键字功能

在js中new关键字主要做了：
首先创建一个空对象，这个对象会作为执行new构造函数之后返回的对象实例，
将创建的空对象原型（`__proto__`）指向构造函数的prototype属性，同时将这个空对象赋值给构造函数内部的this，并执行构造函数逻辑，根据构造函数的执行逻辑，返回初始创建的对象或构造函数的显式返回值。

@[code](./myNew.js)
