/*
 * @Author: HotSuitor
 * @Date: 2020-03-20 15:26:28
 * @LastEditors: hs
 * @LastEditTime: 2020-03-20 17:49:25
 * @Description: hotsuitor@qq.com
 */
function quickSort(arr, low, high) {
  if (low < high) {
    let m = partition(arr, low, high); // O(n)
    // let m = partition2(arr, low, high); // O(n)
    // arr[low..hight] -> arr[low..m-1], pivot, [m+1, high]
    quickSort(arr, low, m - 1);
    quickSort(arr, m + 1, high);
  }
  return arr;
}

function partition(arr, i, j) {
  let p = arr[i]; // 枢纽
  let m = i;
  for (let k = i + 1; k <= j; k++) {
    if (arr[k] < p) {
      m++;
      swap(arr, k, m);
    }
  }
  swap(arr, i, m);
  return m;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition2(arr, left, right) {
  let pivot = arr[left];
  while (left < right) {
    while (left < right && arr[right] >= pivot) right = right - 1;
    arr[left] = arr[right];
    while (left < right && arr[left] < pivot) left = left + 1;
    arr[right] = arr[left];
  }
  arr[left] = pivot;
  return left;
}
let arr1 = [3, 2, 6, 5, 1, 9, 4];
// console.log(
//   `排序前数据：${arr1}\n排序后收据：${quickSort(arr1, 0, arr1.length - 1)}`
// );

let arr2 = Array.from({ length: 100 }, item =>
  Math.floor(Math.random() * Math.floor(100) + 1)
);
console.log(arr2);
console.time("timer");
console.log(quickSort(arr2, 0, arr2.length - 1));
console.timeEnd("timer");
