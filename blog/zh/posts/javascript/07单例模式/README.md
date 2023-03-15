---
date: 2020-11-23
category:
  - 设计模式
tag:
  - 单例模式
---
# 单例模式

也叫单体模式，一个类只实例化一次

优点：
节约系统资源，
缺点：
不易扩展，违反单一职责原则

### 适用场景

当一个类的实例化过程消耗的资源过多，可以使用单例模式来避免性能浪费；
当项目中需要一个公共的状态，那么需要使用单例模式来保证访问一致性；

代码实现：

```js
function Singleton() {
  // 如果已存在实例，则返回单例
  if (Singleton._instance) return Singleton._instance;
  Singleton._instance = this;
}
```

单例模式赋能方法

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 单例模式的赋能方法
function Singleton(FuncClass) {
  let _instance;
  return new Proxy(FuncClass, {
    constructor(target, args) {
      return _instance || (_instance = Reflect.constructor(FuncClass, args));
    }
  });
}
```
