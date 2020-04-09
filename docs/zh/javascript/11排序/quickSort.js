/*
 * @Author: HotSuitor
 * @Date: 2020-03-06 17:55:10
 * @LastEditors: hs
 * @LastEditTime: 2020-03-20 13:43:32
 * @Description: hotsuitor@qq.com
 */
/**
 * @description: 快速排序
 * @param {Array} arr
 * @return: 排序后的arr
 */
// 错误的实现
// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   let len = arr.length;
//   for (let k = 0; k < len; k++) {
//     let pivotIndex = k; // 取无序数据中的第一个作为轴心数
//     let storeIndex = pivotIndex + 1; // 存储有序的数组，最后一个数的位置的下标+1
//     for (let i = pivotIndex + 1; i < len; i++) {
//       if (arr[i] < arr[pivotIndex]) {
//         swap(arr, i, storeIndex);
//         storeIndex++;
//       }
//     }
//     swap(arr, pivotIndex, storeIndex - 1);
//   }
//   return arr;
// }

function quickSort2(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    left = typeof left != "number" ? 0 : left,
    right = typeof right != "number" ? len - 1 : right;

  if (left < right) {
    partitionIndex = partition(arr, left, right);
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  // 分区操作
  var pivot = left, // 设定基准值（pivot）
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

let arr1 = [5, 2, 3, 6, 1];
let arr3 = [...arr1];
console.log(`排序前：${arr1}\n排序后：${quickSort(arr1)}`);
console.log(`排序前：${arr3}\n排序后：${quickSort2(arr3)}`);
let arr2 = Array.from(
  { length: 1000 },
  item => (item = Math.floor(Math.random() * Math.floor(100) + 1))
);

// let arr4 = [...arr2];
// console.time("time");
// quickSort(arr4);
// console.timeEnd("time");
// console.time("time2");
// quickSort2(arr2);
// console.timeEnd("time2");
