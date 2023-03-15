/**
 * 选择排序
 */
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

let arr1 = Array.from(
  { length: 100000 },
  item => (item = Math.floor(Math.random() * Math.floor(100) + 1))
);
console.time("timer");
// console.log(`排序前：${arr1}\n排序后：${selectSort(arr1)}`);
selectSort(arr1);
console.timeEnd("timer");
