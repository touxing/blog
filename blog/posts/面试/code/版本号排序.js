// 输入：['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// 输出： [ '4.3.5', '4.3.4.5', '4.2', '2.3.3', '0.302.1', '0.1.1' ]

// 实现
// 方法1."大数"加权法
// 方法2.循环比较法

// const input = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
const input = ['1.0.1', '1.0.0.1', '0.2222.1']

// 1.算出每一个值的权重
// 2.用sort排序

const maxLen = Math.max(...input.map((item) => item.split('.').length))

const p = 1000
// const reducer = (prev, curr, index, arr) => prev + +curr * Math.pow(p,  maxLen - 1 - index )
const reducer = (prev, curr, index, arr) => prev + Number(curr) / Math.pow(10,  index )


const gen = (arr) => arr.split('.').reduce(reducer, 0)

input.sort((a, b) => {
  return gen(b) - gen(a)
})
console.log(input)

//
const input2 = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']

input2.sort((a, b) => {
  let i = 0
  let arr1 = a.split('.')
  let arr2 = b.split('.')

  while (true) {
    let s1 = arr1[i]
    let s2 = arr2[i]
    i++
    if (typeof s1 === 'undefined' || typeof s2 === 'undefined') {
      return arr2.length - arr1.length
    }
    if (s1 === s2) continue

    return s2 - s1
  }
})
// console.log(input2);
