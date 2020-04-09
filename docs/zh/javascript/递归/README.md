## 递归

1.大问题可以分解为一个个模式相同的小问题，
即有递归公式 2.有递归结束条件，不能陷入死循环 3.深度在当前系统能承受的范围内，递归深度过深会爆栈

> 优化重复计算问题，用把计算过的值缓存起来

很典型的例子，斐波那契数列

```js
function fibonacci(n) {
  // 递归结束条件
  if (n == 1 || n == 2) return 1;
  if (!this.cacheMap) {
    this.cacheMap = new Map();
  }
  // 读取缓存数据
  if (this.cacheMap.has(n)) return this.cacheMap.get(n);
  // 递归公式
  let result = fibonacci(n - 1) + fibonacci(n - 2);
  this.cacheMap.set(n, result); // 把计算过的数据缓存起来
  return result;
}
```

## 排序算法

冒泡，插入，选择
能用插入排序就用插入排序

- 冒泡排序，两层 for，两两对比，大数交换往后移
- 插入排序，取第一个作为有序区间，待排序的数据在无序区间，
  从无序区间取数，与有序区间的数比较，插入到合适的位置
- 选择排序，每次选最小的数，依次排列

| 排序算法 | 是否原地排序 | 是否稳定排序 | 算法复杂度(最好，最坏，平均) |
| -------- | ------------ | ------------ | ---------------------------- |
| 冒泡     | 是           | 是           | O(n)，O(n^2)，O(n^2)         |
| 插入     | 是           | 是           | O(n)，O(n^2)，O(n^2)         |
| 选择     | 是           | 否           | O(n^2)，O(n^2)，O(n^2)       |

稳定性表示，相同数据，是否改变了数据原有的位置，比如 2,4,5,5,1
第一个 5 和第二个 5 的位置没有交换

冒泡排序

```js
function bubbleSort(arr) {
  if (arr.length < 2) return arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}
bubbleSort([2, 4, 5, 3, 1]); // 1,2,3,4,5
```

插入排序

```js
function insertionSort(arr) {
  if (arr.length < 2) return arr;
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > tmp) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
  return arr;
}
let arr1 = [2, 5, 3, 6, 1];
console.log(`排序前：${arr1}\n排序后：${insertionSort(arr1)}`);
// 排序前：2,5,3,6,1
// 排序后：1,2,3,5,6
```

选择排序

```js
function selectSort(arr) {
  if (arr.length < 2) return arr;
  for (let i = 0, len = arr.length; i < len; i++) {
    let k = i; //用于存放当前循环中最小值得index 默认为循环初识值的index
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
    }
    if (k !== i) {
      //将最小值与当前循环的第一个值互换位置
      let tmp = arr[k];
      arr[k] = arr[i];
      arr[i] = tmp;
    }
  }
  return arr;
}

let arr1 = [2, 5, 3, 6, 1];
console.log(`排序前：${arr1}\n排序后：${selectSort(arr1)}`);
```
