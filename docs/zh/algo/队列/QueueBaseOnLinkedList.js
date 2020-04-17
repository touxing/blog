/**
 * 基于链表实现的队列
 * 无限队列
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class QueueBaseOnLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 入队
  enqueue(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
      return true;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
      return true;
    }
  }

  dequeue() {
    // 空队
    if (this.head === null) {
      return null;
    }
    const value = this.head.element;
    this.head = this.head.next;
    return value;
  }

  dequeueAll() {
    const result = [];
    while (this.head !== null) {
      result.push(this.dequeue());
    }
    return result;
  }
}

const newQueue = new QueueBaseOnLinkedList();

console.log("入队1", newQueue.enqueue(1));
console.log("入队2", newQueue.enqueue(2));
console.log("入队3", newQueue.enqueue(3));
console.log("入队4", newQueue.enqueue(4));
console.log("出队", newQueue.dequeue());
console.log("出队", newQueue.dequeueAll());
console.log("出队", newQueue.dequeue());
console.log("出队", newQueue.dequeueAll());
