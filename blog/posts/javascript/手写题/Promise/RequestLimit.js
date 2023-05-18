/*
 * File Created: Thursday, 18th May 2023 9:13:01 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Thursday, 18th May 2023 9:14:14 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */

class RequestLimit {
  constructor(limit = 5) {
    this.count = 0
    this.limit = limit
    this.queue = [] // 数组模拟请求队列
  }

  async add(fn) {
    if (typeof fn !== 'function') return
    if (this.count >= this.limit) {
      await new Promise((resolve) => this.queue.push(resolve))
    }
    this.count++
    try {
      return await fn()
    } finally {
      this.count--
      if (this.queue.length > 0) {
        this.queue.shift()()
      }
    }
  }
}

// ===test===

const sleep = async (time) => {
  await new Promise((resolve) => setTimeout(resolve, time * 1000))
}
const limit = new RequestLimit()
for (let i = 1; i < 21; i++) {
  limit.add(() =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(i, res)
      })
  )
}
