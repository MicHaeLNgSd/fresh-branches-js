'use strict';

class ListNode {
  #data;
  #prev;
  #next;
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  get data() {
    return this.#data;
  }

  set data(newData) {
    this.#data = newData;
  }

  get prev() {
    return this.#prev;
  }

  set prev(node) {
    if (!(node === null || ListNode.isListNode(node))) {
      throw new TypeError('Invalid');
    }
    this.#prev = node;
  }

  get next() {
    return this.#next;
  }

  set next(node) {
    if (!(node === null || ListNode.isListNode(node))) {
      throw new TypeError('Invalid');
    }
    this.#next = node;
  }

  static isListNode(node) {
    return node instanceof ListNode;
  }
}

class DoubleLinkedList {
  #head;
  #tail;
  #length;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get length() {
    return this.#length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number' || Number.isNaN()) {
      throw new TypeError('Invalid');
    }
    this.#length = newLength;
  }

  get head() {
    return this.#head;
  }

  set head(node) {
    if (!(node === null || ListNode.isListNode(node))) {
      throw new TypeError('Invalid');
    }
    this.#head = node;
  }

  get tail() {
    return this.#tail;
  }

  set tail(node) {
    if (!(node === null || ListNode.isListNode(node))) {
      throw new TypeError('Invalid');
    }
    this.#tail = node;
  }

  push(data) {
    const newNode = new ListNode(data);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;

    const lastNode = this.tail;
    const preLastNode = this.tail.prev;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      preLastNode.next = null;
      lastNode.prev = null;
      this.tail = preLastNode;
    }

    this.length--;
    return lastNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const firstNode = this.head;
    const postFirstNode = this.head.next;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      firstNode.next = null;
      postFirstNode.prev = null;
      this.head = postFirstNode;
    }

    this.length--;
    return firstNode;
  }

  unshift(...data) {
    data.forEach((el) => {
      const newNode = new ListNode(el);

      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }

      this.length++;
    });

    return this.length;
  }

  [Symbol.iterator]() {
    return new DLLIterator(this);
  }

  search(data) {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (current.data === data) return current;
      current = current.next;
    }
    return null;
  }
}

class DLLIterator {
  constructor(list) {
    this.list = list;
    this.currentNode = null;
  }
  next() {
    this.currentNode = this.currentNode
      ? this.currentNode.next
      : this.list.head;
    return {
      done: !this.currentNode,
      value: this.currentNode,
    };
  }
}

const list1 = new DoubleLinkedList('test');

// list1[Symbol.iterator] = function () {
//   let currentNode = null;
//   return {
//     next: function () {
//       currentNode = currentNode ? currentNode.next : list1.head;
//       return {
//         done: !currentNode,
//         value: currentNode,
//       };
//     },
//   };
// };

list1.push(10);
list1.push(8);
list1.push(6);

for (const el of list1) {
  console.log('el :>> ', el);
}