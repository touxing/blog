/*
 * File Created: Thursday, 18th May 2023 10:37:33 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Thursday, 18th May 2023 10:37:38 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 */
class RequestLimit {
  constructor(limit = 5) {
    this.limit = limit
    this.count = 0
    this.queue = [] // 并发队列
  }

  async add(fn) {
    if (this.count < this.limit) {
      this.count++
      return fn().finally(() => {
        this.count--
        this.next()
      })
    } else {
      return new Promise((resolve) => {
        this.queue.push(() => {
          this.count++
          resolve(
            fn().finally(() => {
              this.count--
              this.next()
            })
          )
        })
      })
    }
  }

  next() {
    if (this.count < this.limit && this.queue.length > 0) {
      this.queue.shift()()
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
