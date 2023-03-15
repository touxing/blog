/*
 * File Created: Wednesday, 15th March 2023 5:29:43 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Wednesday, 15th March 2023 5:34:19 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

function throttle(fn, wait) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, wait)
  }
}
