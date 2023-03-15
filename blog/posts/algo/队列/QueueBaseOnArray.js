/**
 * 基于数组实现的队列
 * js的数组本身可以作为队列结构，入队=push，出队=shift
 * 这里采用传统的数组下标访问方法
 */
class QueueArray {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    // 队尾没有空间
    if (this.tail === this.size) {
      // 对头也没空间，队满
      if (this.head === 0) {
        console.log("队列满了");
        return false;
      }
      console.log("队尾没有空间，遍历搬移队列往前挪");
      // 空间搬移，队列往前挪
      for (let i = this.head; i < this.tail; i++) {
        this.queue[i - this.head] = this.queue[i];
      }
      // 搬移完成后，更新head和tail
      this.tail -= this.head; // 尾指针-头指针=偏移量
      this.head = 0;
    }
    // 相当于this.queue.push(value); this.tail++;
    this.queue[this.tail++] = value;
    return true;
  }

  dequeue() {
    // 队空
    if (this.tail === 0) {
      return null;
    }
    // this.queue.shift();
    return this.queue[this.head++];
  }

  dequeueAll() {
    const result = [];
    while (this.head !== this.tail) {
      result.push(this.dequeue());
    }
    return result;
  }
}

const newQueue = new QueueArray(5);
let count = 0;
console.log(`入队序号${count++}: a`, newQueue.enqueue("a"));
console.log(`入队序号${count++}: b`, newQueue.enqueue("b"));
console.log(`入队序号${count++}: c`, newQueue.enqueue("c"));
console.log(`入队序号${count++}: d`, newQueue.enqueue("d"));
console.log(`出队:`, newQueue.dequeue());
console.log(`入队序号${count++}: e`, newQueue.enqueue("e"));
console.log(`入队序号${count++}: f`, newQueue.enqueue("f"));
console.log(`入队序号${count++}: g`, newQueue.enqueue("e"));
console.log(`出队全部:`, newQueue.dequeueAll());
