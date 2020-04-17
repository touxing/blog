/**
 * 冒泡排序
 */

function bubbleSort(arr, flag) {
  if (arr.length < 2) return arr;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    // 提前退出循环的标志位
    let flag = false;
    // console.log("i", i);
    for (let j = i + 1; j < length; j++) {
      // console.log("i-j", i, j);
      if (arr[i] > arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        flag = true; //表示有数据交换
      }
    }
    if (!flag) break; // 没有数据交换，提前退出
  }
  return arr;
}

// let arr1 = [2, 5, 3, 6, 1];
// console.log(`排序前：${arr1}\n排序后：${bubbleSort(arr1)}`);

let arr1 = Array.from(
  { length: 100000 },
  item => (item = Math.floor(Math.random() * Math.floor(100) + 1))
);
console.time("time");
bubbleSort(arr1);
console.timeEnd("time");
