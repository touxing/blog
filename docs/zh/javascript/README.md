---
sidebarDepth: 3
---
[[toc]]

## 基础知识


#### JavaScript获取DOM元素位置和尺寸大小
基础概念

为了方便理解，我们需要了解几个基础概念，每个HTML元素都有下列属性


|      |      |      |
| ---- | ---- | ---- |
|offsetWidth|clientWidth|scrollWidth|
|offsetHeight|clientHeight|scrollHeight|
|offsetLeft|clientLeft|scrollLeft|
|offsetTop|clientTop|scrollTop|

为了理解这些属性，我们需要知道HTML元素的实际内容有可能比分配用来容纳内容的盒子更大，因此可能会出现滚动条，内容区域是视口，当实际内容比视口大的时候，需要把元素的滚动条位置考虑进去。

1. clientHeight和clientWidth用于描述元素内尺寸，是指 元素内容+内边距 大小，不包括边框（IE下实际包括）、外边距、滚动条部分

2. offsetHeight和offsetWidth用于描述元素外尺寸，是指 元素内容+内边距+边框，不包括外边距和滚动条部分

3. clientTop和clientLeft返回内边距的边缘和边框的外边缘之间的水平和垂直距离，也就是左，上边框宽度

4. offsetTop和offsetLeft表示该元素的左上角（边框外边缘）与已定位的父容器（offsetParent对象）左上角的距离

5. offsetParent对象是指元素最近的定位（relative,absolute）祖先元素，递归上溯，如果没有祖先元素是定位的话，会返回null

// js获取元素的margin外边距
```js
function getComputedStyle(div) {
  var computedStyle
  //    兼容IE和火狐谷歌等的写法
  if (window.getComputedStyle) {
    computedStyle = window.getComputedStyle(div, null)
  } else {
    //兼容IE的写法
    computedStyle = div.currentStyle
  }
  return computedStyle
}
```

[JavaScript中获取DOM元素宽度和高度的常用API](https://lele3.github.io/2019/12/13/JavaScript%E4%B8%AD%E8%8E%B7%E5%8F%96DOM%E5%85%83%E7%B4%A0%E5%AE%BD%E5%BA%A6%E5%92%8C%E9%AB%98%E5%BA%A6%E7%9A%84%E5%B8%B8%E7%94%A8API.html)
## 进阶
[javascript中的this](./this/)

[03闭包与高阶函数](./03闭包与高阶函数/)

[04ES6](./04ES6/)
> 参考：[阮一峰老师的ES6入门教程](http://es6.ruanyifeng.com/)

[05继承与原型链](./05继承与原型链/)

### 宏观任务与微观任务
> https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

## 设计模式
> 设计模式是招式，即学即用，实用派

> [博主CSDN博客专题参考](https://blog.csdn.net/example440982/category_9291871.html)

[06设计原则](./06设计原则/)

[07单例模式](./07单例模式/)

[08工厂模式 & 09抽象工厂模式](./08工厂模式/)

[10建造者模式](./10建造者模式/)

[11代理模式](./11代理模式/)

[12享元模式](./12享元模式/)

[13适配器模式](./13适配器模式/)

[14装饰器模式](./14装饰器模式/)

[15外观模式](./15外观模式/)

[16组合模式](./16组合模式/)

[17桥接模式](./17桥接模式/)

[18发布订阅模式](./18发布订阅模式/)

[19策略模式](./19策略模式/)

[20状态模式](./20状态模式/)

[21模板方法模式](./21模板方法模式/)

[22迭代器模式](./22迭代器模式/)

[23命令模式](./23命令模式/)

[24职责链模式](./24职责链模式/)

[25中介者模式](./25中介者模式/)

[26MVVM](./26MVVM/)

[27模块模式](./27模块模式/)

[28链模式](./28链模式/)

[29中间件模式](./29中间件模式/)

## [算法](../algo/)
> 算法是内功，唯有内功深厚，才能称霸“江湖” 实力派

> 参考：[javascript算法](https://github.com/trekhleb/javascript-algorithms)

## 阅读源码

### [理解vue原理](../readvue/)

简化版vue，学习原理
[练习仓库](https://gitee.com/hotsuitor/understand_vue)

## 微服务

[single-spa](https://single-spa.js.org/) 一款微服务框架


## 书籍推荐

[《You Don't know JS》](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/README.md)


## nodejs

### [极简入门nodejs](https://www.yuque.com/sunluyong/node/stream)
### [如何写一个cli工具并发布npm包](./nodejs/npm)

## 游戏

### [Phaser3](./phaser)
