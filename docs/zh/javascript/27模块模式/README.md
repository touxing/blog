# 模块模式

**命名空间**
命名空间模式是一个简单的模拟模块的方法，即创建一个全局对象，然后将变量和方法添加到这个全局对象中，这个全局对象是作为命名空间一样的角色。

**模块模式**
除了命名空间模式，也可以使用闭包的特性来模拟实现私有成员的功能来提升安全性，这里可以通过 IIFE 快速创建一个闭包，将要隐藏的变量和方法放在闭包中，这就是模块模式。
```js
var myModule = (function() {
    var privateProp = ''      	// 私有变量
    var privateMethod = function() { // 私有方法
        console.log(privateProp)
    }

    return {
        publicProp: 'foo',              // 公有变量
        publicMethod: function(prop) {  // 共有方法
            privateProp = prop
            privateMethod()
        }
    }
})()

myModule.publicMethod('new prop') // 输出：new prop
myModule.privateProp              // Uncaught TypeError: myModule.privateMethod is not a function
myModule.privateProp              // undefined
```

## ES6 module

* `export`
* `import`
