// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  display() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top element:", stack.peek());
console.log("Removed element:", stack.pop());
console.log("Top element after pop:", stack.peek());
stack.display();
