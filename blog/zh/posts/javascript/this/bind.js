/*
 * @Author: HotSuitor
 * @Date: 2020-03-19 14:38:04
 * @LastEditors: hs
 * @LastEditTime: 2020-03-19 15:37:36
 * @Description: hotsuitor@qq.com
 */
// es6
if(typeof Function.prototype.bind !== 'function') {
  Function.prototype.bind = function() {
    var _this = this
    var args1 = Array.prototype.slice.call(arguments)
    var context = args1.shift()
    return function() {
      var args2 = Array.prototype.slice.call(arguments)
      return _this.apply(context, args1.concat(args2))
    }
  }
}

// es6
Function.prototype.bind = Function.prototype.bind || function(...args1) {
  const _this = this
  const context = args1.shift()
  return function(...args2) {
    return _this.apply(context, [...args1, ...args2])
  }
}

global.a = 'hello'
function foo() {
  console.log(a)
}
foo.call(null)

var obj = {
  a: 'world',
  boo: function() {
    console.log(this.a)
  }
}
obj.boo()
var bar = obj.boo
bar()

function func(fn) {
  var _this = this
  return (function() {
    fn()
  })(fn)
}
func(obj.boo)

var obj2 = {
  a: 'world',
  b: {
    a: 'obj2->b',
    foo: function() {
      console.log(this.a)
    }
  }
}
obj2.b.foo()

var a = 20

var obj = {
  a: 40,
  foo: () => {
    console.log(this.a)
    function func() {
      this.a = 60
      console.log(this.a)
    }
    func.prototype.a = 50
    return func
  }
}
var bar = obj.foo()
bar()
new bar()
