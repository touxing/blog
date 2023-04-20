/*
 * File Created: Thursday, 20th April 2023 6:02:11 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Thursday, 20th April 2023 6:06:31 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is Not a Function`)
  }

  const args = [...arguments].slice(1),
    fn = this

  return function Fn() {
    // 根据调用方式，传入不同绑定值
    fn.apply(
      this instanceof Fn ? new fn(...arguments) : context,
      args.concat(...arguments)
    )
  }
}
