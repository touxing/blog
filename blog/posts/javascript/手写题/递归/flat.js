/*
 * File Created: Friday, 12th May 2023 9:59:37 am
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Friday, 12th May 2023 9:59:42 am
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

let a = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
// 变成
let b = [1, 2, 3, 1, 2, 3, 1, 2, 3]
// 具体实现
function flat(arr = [], result = []) {
  arr.forEach((v) => {
    if (Array.isArray(v)) {
      result = result.concat(flat(v, []))
    } else {
      result.push(v)
    }
  })
  return result
}

console.log('input', a)
console.log('expect', b)
console.log('output', flat(a))
