// Task 1: Define a class Perses with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreetingMsg() {
    return `Hello ${this.name}, Your age is ${this.age}`;
  }
}

let msg = new Person("Pijush Ghorai", 24);
let msg2 = new Person("Sagar Nandi", 26);
console.log(msg.getGreetingMsg());
console.log(msg2.getGreetingMsg());
