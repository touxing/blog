/*
 * File Created: Wednesday, 15th March 2023 5:29:43 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Wednesday, 15th March 2023 5:34:19 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */


/** 简单版本 */
function throttle0(fn, wait=300) {
  let lastTime = Date.now()
  return (...args) => {
    const now = Date.now()
    if(now - lastTime > wait) {
      fn.apply(this, args)
      lastTime = now
    }
  }
}

function throttle(fn, wait = 300, imediate = false) {
  let inThrottle = !immediate,
    lastFn,
    lastTime
  return function () {
    const context = this,
      args = arguments
    if (!inThrottle) {
      fn.apply(context, args)
      lastTime = Date.now()
      inThrottle = true
    } else {
      clearTimeout(lastFn)
      lastFn = setTimeout(function () {
        if (Date.now() - lastTime > wait) {
          fn.apply(context, args)
          lastTime = Date.now()
        }
      }, Math.max(wait - (Date.now() - lastTime), 0))
    }
  }
}

// Example
window.addEventListener(
  'resize',
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
