/**
 * 插入排序
 */

function insertionSort(arr) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let value = arr[i]; // 第一个数据，为有序
    let j = i - 1;
    for (; j >= 0; j--) {
      // 与有序数据比较，若插入数小于前面的数据，交换位置
      if (arr[j] > value) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}

let arr1 = [2, 5, 3, 6, 1];
console.log(`排序前：${arr1}\n排序后：${insertionSort(arr1)}`);

let arr2 = Array.from(
  { length: 100000 },
  item => (item = Math.floor(Math.random() * Math.floor(100) + 1))
);
console.time("timer");
insertionSort(arr2);
console.timeEnd("timer");
