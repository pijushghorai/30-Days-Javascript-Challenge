// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;

console.log(node1.value);
console.log(node1.next.value);
