---
date: 2020-11-23
category:
  - 设计模式
tag:
  - 外观模式
---
# 外观模式
4 :star:

外观模式 （Facade Pattern）又叫门面模式，定义一个将子系统的一组接口集成在一起的高层接口，以提供一个一致的外观。外观模式让外界减少与子系统内多个模块的直接交互，从而减少耦合，让外界可以更轻松地使用子系统。本质是封装交互，简化调用。

外观模式（Facade Pattern）隐藏系统的复杂性，并向客户端提供了一个客户端可以访问系统的接口。这种类型的设计模式属于结构型模式，它向现有的系统添加一个接口，来隐藏系统的复杂性。

这种模式涉及到一个单一的类，该类提供了客户端请求的简化方法和对现有系统类方法的委托调用。

## 应用

#### 函数重载

```js
function domBindEvent(nodes, type, selector, fn) {
    if (fn === undefined) {
        fn = selector
        selector = null
    }
    // ... 剩下相关逻辑
}

domBindEvent(nodes, 'click', '#div1', fn)
domBindEvent(nodes, 'click', fn)
```
增强调用函数的灵活性

#### 浏览器兼容

```js
function addEvent(element, type, fn) {
    if (element.addEventListener) {      // 支持 DOM2 级事件处理方法的浏览器
        element.addEventListener(type, fn, false)
    } else if (element.attachEvent) {    // 不支持 DOM2 级但支持 attachEvent
        element.attachEvent('on' + type, fn)
    } else {
        element['on' + type] = fn        // 都不支持的浏览器
    }
}

var myInput = document.getElementById('myinput')

addEvent(myInput, 'click', function() {
    console.log('绑定 click 事件')
})
```

::: warning
外观模式一般是作为子系统的功能出口出现，使用的时候可以在其中增加新的功能，但是不推介这样做，因为外观应该是对已有功能的包装，不应在其中掺杂新的功能。
:::

### 源码中的外观模式

vue中的createElement

jQuery中的一些方法
使用 jQuery 的 `$(document).ready(...)` 来给浏览器加载事件添加回调时，jQuery 会使用源码中的 `bindReady` 方法：

```js
bindReady: function() {
    // ...

    // Mozilla, Opera and webkit 支持
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', DOMContentLoaded, false)

        // A fallback to window.onload, that will always work
        window.addEventListener('load', jQuery.ready, false)

        // 如果使用了 IE 的事件绑定形式
    } else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', DOMContentLoaded)

        // A fallback to window.onload, that will always work
        window.attachEvent('onload', jQuery.ready)
    }

    // ...
}
```

::: tip
以前(2018年)看过jQuery的源码，大致能看到代码里面的行为意图，`如果不符合，则xx` 只是从逻辑的角度看代码，只见树木不见深林。 原来是大量用了外观模式。软件工程很有必要修一下。
:::
