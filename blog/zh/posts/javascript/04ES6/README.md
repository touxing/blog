---
date: 2020-11-23
category:
  - js
tag:
  - js
  - es6
---

# 04 es6 特性

## `let` `const`

解构赋值

```js
const data = {
  name: 'John',
  age: 30,
}
let { name, age } = data
// name = data.name
// age = data.age
```

---

箭头函数

```js
;() => {
  console.log('hello world')
}
```

---

Promise

`.then()`
return 返回的值会传给下一个 then 作为参数接收

`.all([P1, P2 [,...]])` 全部成功 `fulfilled` 状态 才 `then`
`.race([P1, P2 [,...]])` “赛马模式”，只要有 Promise `fulfilled`(成功) 就 `then`

```js
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve value')
  }, 2000)
})
p.then((res) => {
  console.log(res || 'hello world')
})
```

---

Iterator(迭代器) 和 for...of

---

生成器，generator

```js
function* g1() {}
```
