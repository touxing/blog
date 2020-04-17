/*
 * @Author: HotSuitor
 * @Date: 2020-03-19 16:01:22
 * @LastEditors: hs
 * @LastEditTime: 2020-03-19 22:44:45
 * @Description: hotsuitor@qq.com
 */
// 堆
const heap = [undefined, 33, 27, 21, 16, 13, 15, 9, 5, 6, 7, 8, 1, 2];

class Heap {
  constructor(arr, size) {
    this.heapArray = arr || [];
    this.size = size + 1 || 300;
  }
  // 根节点索引=1,左子节点=2*i,右子节点=2*i+1, i=层数
  insert(data) {
    let len = this.heapArray.length;
    if (len >= this.size) {
      console.log("堆满了");
      return; // 堆满了
    }
    if (len === 0) {
      this.heapArray.splice(0, 0, undefined, data);
      return;
    }
    this.heapArray.push(data);
    let currentIndex = this.heapArray.length - 1;
    let i; // 层数,从0开始
    let parentIndex;
    //! 奇数->跟、右节点，偶数->左节点
    parentIndex = currentIndex % 2 ? (currentIndex - 1) / 2 : currentIndex / 2; // 父节点的索引
    // 自下往上堆化
    while (
      parentIndex > 0 &&
      this.heapArray[currentIndex] > this.heapArray[parentIndex]
    ) {
      this.swap(this.heapArray, currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex =
        currentIndex % 2 ? (currentIndex - 1) / 2 : currentIndex / 2; // 父节点的索引
    }
  }
  // 删除堆顶元素
  deleteTop(data) {
    let len = this.heapArray.length;
    if (len <= 2) return this.heapArray;
    /**最后一个与第一个元素互换位置
     * 再自顶而下堆化
     */
    this.swap(this.heapArray, 1, len - 1);
    this.heapArray.pop();
    let i = 1;
    while (
      i * 2 < this.heapArray.length &&
      this.heapArray[i] < this.heapArray[i * 2]
    ) {
      this.swap(this.heapArray, i, i * 2);
      i = i * 2;
    }
  }
  scan() {
    return this.heapArray;
  }
  swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}

class Heap2 {
  constructor(capacity) {
    this.arr = new Array(capacity + 1); // 数组下标从1开始
    this.n = capacity; // 堆可以存储的最大数据个数
    this.count = 0; // 堆中已存储的数据个数
  }
  // 建堆
  static buildHeap(arr) {
    if (!Array.isArray(arr)) return;
    let n = arr.length - 1; // 堆元素个数
    // 从第i个节点开始从上往下堆化，子节点不需要比较，所以向下取整
    let i = Math.floor(n / 2);
    for (; i >= 1; --i) {
      Heap2.heapify(arr, n, i);
    }
    return arr;
  }
  static heapify(arr, n, i) {
    while (true) {
      let maxPox = i;
      // 左子节点比父节点大
      if (i * 2 <= n && arr[i] < arr[i * 2]) maxPox = i * 2;
      // 右节点比左节点大
      if (i * 2 + 1 <= n && arr[maxPox] < arr[i * 2 + 1]) maxPox = i * 2 + 1;
      if (maxPox === i) break;
      // 交互父子节点
      Heap2.swap(arr, i, maxPox);
      i = maxPox;
    }
  }
  insert(data) {
    if (this.count >= this.n) return; // 堆满了
    this.count++;
    this.arr[this.count] = data;
    let i = this.count;
    // 自下而上堆化
    while (i / 2 > 0 && this.arr[i] > this.arr[i / 2]) {
      this.swap(this.arr, i, i / 2);
      i = i / 2;
    }
  }
  static deleteTop(arr) {
    if (arr.length <= 1) return;
    Heap2.swap(arr, 1, arr.length - 1);
    let result = arr.pop();
    let i = 1;
    while (true) {
      let maxPox = i;
      // 左节点
      if (i * 2 < arr.length && arr[i] < arr[i * 2]) maxPox = i * 2;
      if (i * 2 + 1 < arr.length && arr[maxPox] < arr[i * 2 + 1])
        maxPox = i * 2 + 1;
      if (maxPox === i) break;
      Heap2.swap(arr, i, maxPox);
      i = maxPox;
    }
    return result;
  }
  scan() {
    return this.arr;
  }
  static swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  // 堆排序
  static sort(arr) {
    let i = arr.length - 1; // 排序的索引
    let result = new Array(arr.length);
    for (; i >= 1; i--) {
      let maxValue = Heap2.deleteTop(arr);
      result[i] = maxValue;
    }
    return result;
  }
}

// let heap2 = new Heap(heap);
// heap2.insert(22);
// heap2.insert(23);
// console.log(heap2.scan());
// heap2.deleteTop();
// heap2.deleteTop();
// console.log(heap2.scan());

// let heap3 = new Heap([], 5);
// heap3.insert(23);
// heap3.insert(27);
// heap3.insert(33);
// heap3.insert(45);
// heap3.insert(22);
// console.log(heap3.scan());
// heap3.deleteTop();
// console.log(heap3.scan());

// let heap4 = new Heap2(5);
// heap4.insert(33);
// heap4.insert(23);
// heap4.insert(45);
// heap4.insert(22);
// heap4.insert(7);
// console.log(heap4.scan());

let arr1 = [, 3, 44, 23, 18, 39, 26, 77];
let arr2 = [...arr1];
let arr1Heap = Heap2.buildHeap(arr2);
console.log("arr1", arr1);
console.log("arr1Heap", arr1Heap);
console.log("heapSort", Heap2.sort(arr1Heap));
