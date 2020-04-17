/**
 * 循环队列
 */

class QueueCircular {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    // 队满
    if ((this.tail + 1) % this.size === this.head) {
      return false;
    }
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    return true;
  }

  dequeue() {
    // 队空
    if (this.tail === this.head) {
      return null;
    }
    const result = this.queue[this.head];
    this.head = (this.head + 1) % this.size;
    return result;
  }

  dequeueAll() {
    const result = [];
    while (this.tail !== this.head) {
      result.push(this.dequeue());
    }
    return result;
  }
}

class QueueCircular2 {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.head = 0;
    this.tail = 0;
    this.queueSize = 0; // 记录队列入栈数量
  }
  enqueuq(value) {

  }
  dequeue() {

  }
}

const newQueue = new QueueCircular(5)
let count = 0;
console.log(`入队序号${count++}: a`, newQueue.enqueue("a"));
console.log(`入队序号${count++}: b`, newQueue.enqueue("b"));
console.log(`入队序号${count++}: c`, newQueue.enqueue("c"));
console.log(`入队序号${count++}: d`, newQueue.enqueue("d"));
console.log(`入队序号${count++}: e`, newQueue.enqueue("e"));
console.log(`出队:`, newQueue.dequeue());
console.log(`入队序号${count++}: f`, newQueue.enqueue("f"));
console.log(`入队序号${count++}: g`, newQueue.enqueue("e"));
console.log(`出队全部:`, newQueue.dequeueAll());
