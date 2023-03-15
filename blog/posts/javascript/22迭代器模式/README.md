---
date: 2020-11-23
category:
  - 设计模式
tag:
  - 迭代器模式
---
# 迭代器模式

### 迭代器的简单实现

jquery中迭代器的实现
```js
// jquery 源码  /src/core.js#L246-L265
each: function (obj, callback) {
    var i = 0

    // obj 为数组时
    if (isArrayLike(obj)) {
        for (; i < obj.length; i++) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break
            }
        }
    }

    // obj 为对象时
    else {
        for (i in obj) {
            if (callback.call(obj[i], i, obj[i]) === false) {
                break
            }
        }
    }

    return obj
}

// 使用
$.each(['hello', 'world', '!'], function(idx, currValue){
  console.log('当前值 ' + currValue + '，索引为 ' + idx)
})
```
