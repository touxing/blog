/*
 * File Created: Tuesday, 14th March 2023 5:02:13 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Tuesday, 14th March 2023 5:08:14 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

function newFn(...args) {
  // 获取第一个参数，要new的函数
  const constructor = args.shift()
  // 创建一个空的对象,将实例化对象的原型指向构造函数的原型对象
  const obj = Object.create(constructor.prototype)
  // 修改this指向空对象，传入参数
  const result = constructor.apply(obj, args)
  // 判断返回值，如果函数返回值为基本数据类型时, 则new出的对象依然是创建出的对象
  return result instanceof Object ? result : obj
}

function Person(name) {
  this.name = name
}

let p1 = newFn(Person, 'Lisa')
let p2 = newFn(Person, 'Jery')
console.log(p1.name) // Lisa
console.log(p2.name) // Jery
