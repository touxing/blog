/**
 * 桶排序
 * @param {Array} arr
 * @param {Number} bucketSize
 */
function bucketSort(arr, bucketSize = 5) {
  if (arr.length < 2) return arr;

  const buckets = createBucket(arr, bucketSize);
  return sortBuckets(buckets);
}

/**
 * @description:
 * @param {Array} arr=待排序数据
 * @param {Number} bucketSize=桶大小
 * @return:
 */
function createBucket(arr, bucketSize) {
  let minValue = arr[0];
  let maxValue = arr[0];
  // 找出数据中最大值和最小值，根据桶的大小用来划分桶的个数和区间
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // 桶的个数
  const bucketCount = Math.ceil((maxValue - minValue) / bucketSize);

  // 创建桶，用二维数组来存储
  const buckets = [];
  for (let i = 0; i <= bucketCount; i++) {
    buckets[i] = [];
  }

  // 计算把数据放到哪个桶
  for (let i = 0; i < arr.length; i++) {
    let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }
  return buckets;
}

/**
 * @description: 排序桶
 * @param {Array}  buckets
 * @return:
 */
function sortBuckets(buckets) {
  const sortArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      const sortBucket = insertionSort(buckets[i]);
      sortArray.push(sortBucket);
    }
  }
  return sortArray;
}

/**
 * @description: 插入排序
 * @param {Array} arr
 * @return: 排好序的arr
 */
function insertionSort(arr) {
  if (arr.length < 2) return arr;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // 第一个元素已排好序，从第二个开始比较插入
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > key) {
        arr[j + 1] = arr[j]; // 比较，较大者，往后移
      } else {
        break;
      }
    }
    arr[j + 1] = key; // 插入对应的位置
  }
  return arr;
}

// 随机生成1000000个[1,100]区间内的整数
let arr1 = Array.from(
  { length: 1000000 },
  item => (item = Math.floor(Math.random() * Math.floor(100) + 1))
);

console.time("timer");
// console.log(`排序前的数据:${arr1}, 排序后的数据:${bucketSort(arr1, 5)}`);
bucketSort(arr1, 1); // 桶越小，排序越快，即桶个数越多，排序越快
console.timeEnd("timer");
