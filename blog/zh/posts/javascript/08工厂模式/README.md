---
date: 2020-11-23
category:
  - 设计模式
  - 工厂模式
tag:
  - 工厂模式
  - 抽象工厂
---

# 工厂模式

工厂模式 （Factory Pattern），根据不同的输入返回不同类的实例，一般用来创建同一类对象。工厂方式的主要思想是将对象的创建与对象的实现分离


## 抽象工厂

抽象工厂 （Abstract Factory）：通过对类的工厂抽象使其业务用于对产品类簇的创建，而不是负责创建某一类产品的实例。关键在于使用抽象类制定了实例的结构，调用者直接面向实例的结构编程，从实例的具体实现中解耦。

工厂模式，顾名思义，就相当于一间工厂，工厂可以添加不同的模具，制造不同系列的产品，比如生产飞机，大炮。

抽象工厂，顾名思义，定义的是抽象的概念，没有定义如何实现。比如沈飞工厂生产飞机，定义抽象类“飞机”，具体实现，可以生产容量较大的C919客机，可以生产歼-20战斗机，B-20轰炸机。具体型号的飞机是实现，它们都符合 “飞机” 这个抽象类。

抽象类实现
```js
/* 抽象类，ES5 构造函数方式 */
// var AbstractEs5 = function() {
//   if(new.target === AbstractEs5) {
//     throw new Error('抽象类不能实例化')
//   }
// }
// AbstractEs5.prototype.fly = function() {
//   throw new Error('抽象类方法不能调用')
// }

//  抽象工厂 飞机制造厂
class AbstractFactory  {
  constructor() {
    if(new.target === AbstractFactory) {
      throw new Error('抽象类不能实例化')
    }
  }
  // 抽象制造方法，我只会说要造什么，我不会造
  createProduct() {
    throw new Error('抽象类方法不能调用')
  }
}

// 我是抽象飞机，我是一款概念产品
class AbstractPlane {
  constructor(){
   if(new.target === AbstractPlane) {
      throw new Error('抽象类不能实例化')
    }
  }
  fly() {
    throw new Error('抽象类方法不能调用')
  }
}

// 具体工厂模式，沈飞制造厂
class FactoryShenFei extends AbstractFactory {
  constructor() {
    super()
  }
  /** todo: 内部可以使用策略模式，这里简单用 switch-case
   * 实现抽象制造方法，我知道如何造飞机，我有很多模具
  */
  createProduct(type) {
    switch(type) {
      case 'C919客机':
        return new C919Plane(type);
      break;
      case '歼-20战斗机':
        return new Jian20(type);
      break;
      case 'B-20轰炸机':
        return new B20Hong(type);
      break;
      default:
        return new PrintWorks('工厂没活干就喜欢开动印钞机');
      break;
    }
  }
}

// 我是c919客机模具
class C919Plane extends AbstractPlane{
  constructor(name) {
    super()
    console.log(`我是${name}具体产品`)
  }
  fly() {
    console.log('我可以飞得很猛，载客量大，安全第一')
  }
}

// 我是歼20战斗机模具
class Jian20 extends AbstractPlane{
  constructor(name) {
    super()
    console.log(`我是${name}具体产品`)
  }
  fly() {
    console.log('我可以飞得很快，咻咻咻')
  }
}

// 我是B20轰炸机模具
class B20Hong extends AbstractPlane{
  constructor(name) {
    super()
    console.log(`我是${name}具体产品`)
  }
  fly() {
    console.log('我可以飞得很久，载蛋量大，轰轰轰')
  }
}

var F1 = new FactoryShenFei()
var C9 = F1.createProduct('C919客机')
C9.fly()

var J20 = F1.createProduct('歼-20战斗机')
J20.fly()

var B20 = F1.createProduct('B-20轰炸机')
B20.fly()
```

工厂模式和抽象工厂模式的区别：

工厂模式 主要关注单独的产品实例的创建；
抽象工厂模式 主要关注产品类簇实例的创建，如果产品类簇只有一个产品，那么这时的抽象工厂模式就退化为工厂模式了；
根据场景灵活使用即可。
