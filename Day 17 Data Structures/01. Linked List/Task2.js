// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  remove() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    }

    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    return value;
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display();
console.log("Removed:", list.remove());
list.display();
