/*
 * File Created: Wednesday, 15th March 2023 5:29:32 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Wednesday, 15th March 2023 5:34:06 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

/**
 * 防抖
 * @param {*} fn 被包装的函数
 * @param {*} delay 延迟时间 ms
 * @returns
 */
function debounce(fn, delay) {
  let timer = null

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
