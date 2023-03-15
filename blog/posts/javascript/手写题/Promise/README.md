---
date: 2020-11-23
category:
  - javascript
tag:
  - Promise
  - 面试
---
# 手写实现Promise

```js
/*
 * File Created: Tuesday, 14th March 2023 3:39:42 pm
 * Author: hotsuitor (hotsuitor@qq.com)
 * -----
 * Last Modified: Tuesday, 14th March 2023 4:35:43 pm
 * Modified By: hotsuitor (hotsuitor@qq.com>)
 * -----
 */

const PROMISE_STATUS_PENDING = 'pending' // 等待状态
const PROMISE_STATUS_FULFILED = 'fulfilled' // 成功状态
const PROMISE_STATUS_REJECTED = 'rejected' // 失败状态

// help function
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch (error) {
    reject(error)
  }
}
class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING // promise状态
    this.value = undefined // resolve返回值
    this.reason = undefined // reject返回值
    this.onFulFilledFns = [] // 保存成功回调
    this.onRejectedFns = [] // 保存失败回调

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILED
          this.value = value
          this.onFulFilledFns.forEach((fn) => {
            fn(this.value)
          })
        })
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach((fn) => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || ((value) => value)
    onRejected =
      onRejected ||
      ((err) => {
        throw err
      })

    return new MyPromise((resolve, reject) => {
      // 1. when operate then,  status has confirmed
      if (this.status === PROMISE_STATUS_FULFILED && onFulfilled) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }

      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled) {
          this.onFulFilledFns.push(() => {
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          })
        }
        if (onRejected) {
          this.onRejectedFns.push(() => {
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          })
        }
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(
      () => {
        onFinally()
      },
      () => {
        onFinally()
      }
    )
  }

  static resolve(value) {
    return new MyPromise((resolve) => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const values = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            values.push(res)
            if (values.length === promises.length) {
              resolve(values)
            }
          },
          (err) => reject(err)
        )
      })
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve) => {
      const results = []
      promises.forEach((promise) => {
        promise.then(
          (res) => {
            results.push({ status: PROMISE_STATUS_FULFILED, value: res })
            if (results.length === promises.length) {
              resolve(results)
            }
          },
          (err) => {
            results.push({ status: PROMISE_STATUS_REJECTED, value: err })
            if (results.length === results.length) {
              resolve(results)
            }
          }
        )
      })
    })
  }
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve, reject)
      })
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      const reasons = []
      promises.forEach((promise) => {
        promise.then(resolve, (err) => {
          reasons.push(err)
          if (reasons.length === promises.length) {
            reject(reasons)
          }
        })
      })
    })
  }
}

/** test */
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    console.log('--- 1 ---')
    resolve(111)
  })
}).then((res) => {
  console.log('p1 res :>> ', res)
})

const p2 = new MyPromise((resolve, reject) => {
  console.log('--- 2 ---')
  resolve(222)
})

const p3 = new MyPromise((resolve, reject) => {
  console.log('--- 3 ---')
  resolve(333)
})

const p4 = new MyPromise((resolve, reject) => {
  console.log('--- 4 ---')
  reject(444)
})

MyPromise.all([p2, p3]).then((res) => {
  console.log('p2&p3 res :>> ', res)
})

MyPromise.all([p2, p4])
  .then((res) => {
    console.log('p2&p4 res :>> ', res)
  })
  .catch((err) => {
    console.log('err :>> ', err)
  })

```
