// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

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

function reverseString(str) {
  const stack = new Stack();

  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";
  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);
