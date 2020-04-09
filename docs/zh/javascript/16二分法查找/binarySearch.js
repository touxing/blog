/*
 * @Author: HotSuitor
 * @Date: 2020-03-09 18:05:17
 * @LastEditors: hs
 * @LastEditTime: 2020-03-10 12:06:16
 * @Description: hotsuitor@qq.com
 */

/**
 * @description: 二分法查找
 * @param {Array} arr=有序数组
 * @param {Number} value=查找的值
 * @return: index 匹配的下标 or -1
 */
function binarySearch(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (value == arr[mid]) {
      return mid;
    } else if (value < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

let arr1 = [2, 3, 5, 7];
let value = 5;
let index = binarySearch(arr1, 5);
console.log(
  `在[${arr1}]中查找${value}，所在位置${index}，arr1[${index}]=${value}`
);

/**
 * @description: 查找第一个等于value的元素
 * @param {Array} arr
 * @param {Number} value
 * @return:
 */
function binarySearchFirst(arr, value) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] < value) {
      low = mid + 1;
    } else if (arr[mid] > value) {
      high = mid - 1;
    } else {
      if (mid == 0 || arr[mid - 1] != value) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

value = 5;
let arr2 = [2, 3, 3, 5, 5, 7, 9, 9, 9, 11];
let index2 = binarySearchFirst(arr2, value);
console.log(
  `在[${arr2}]中查找第一个等于${value}的元素，所在位置${index2}，arr2[${index2}]=${value}`
);

/**
 * @description: 查找最后一个值等于给定值的元素
 * @param {Array} arr
 * @param {Number} value
 * @return: index=元素下标
 */
function binarySearchLast(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] > value) {
      high = mid - 1;
    } else if (arr[mid] < value) {
      low = mid + 1;
    } else {
      if (mid == arr.length - 1 || arr[mid + 1] != value) return mid;
      else low = mid + 1;
    }
  }
  return -1;
}

let index3 = binarySearchLast(arr2, value);
console.log(
  `在[${arr2}]中查找最后一个等于${value}的元素，所在位置${index3}，arr2[${index3}]=${value}`
);

/**
 * @description: 查找第一个大于等于给定值的元素
 * @param {Array} arr
 * @param {Number} value
 * @return: 找到元素的下标，找不到返回-1
 */
function binarySearchFirstGtE(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] >= value) {
      if (mid == 0 || arr[mid - 1] < value) return mid;
      else high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

value = 9;
let index4 = binarySearchFirstGtE(arr2, value);
console.log(
  `在[${arr2}]中查找第一个大于等于${value}的元素，所在位置${index4}，arr2[${index4}]=${value}`
);

/**
 * @description: 查找最后一个小于等于给定值的元素
 * @param {Array} arr
 * @param {Number} value
 * @return: 找到元素的下标，找不到返回-1
 */
function binarySearchLastLtE(arr, value) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (arr[mid] <= value) {
      if (mid == arr.length - 1 || arr[mid + 1] > value) return mid;
      else low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

value = 9;
let index5 = binarySearchLastLtE(arr2, value);
console.log(
  `在[${arr2}]中查找最后一个小于等于${value}的元素，所在位置${index5}，arr2[${index5}]=${value}`
);
