import Node from './Task.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = 0;
    this.length = 0;
  }

  append(value, completed, index) {
    const newNode = new Node(value, completed, index);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  delete(value) {
    if(!this.head){
      return null;
    }

    let deletedNode = null;

    while(this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if(currentNode !== null) {
      while (currentNode.next){
        if(currentNode.next.value === value) {
          

          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if(this.tail?.value === value) {
      this.tail = currentNode;
    }
    return deletedNode;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}
