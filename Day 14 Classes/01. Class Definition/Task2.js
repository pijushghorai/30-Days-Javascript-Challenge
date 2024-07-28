// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getGreetingMsg() {
    return `Hello ${this.name}, Your age is ${this.age}`;
  }

  updateAge(newAge) {
    this.age = newAge;
    return `Updated age is ${this.age}`;
  }
}

let person1 = new Person("Sohan Mishra", 24);
console.log(person1.updateAge(18));
console.log(person1.getGreetingMsg());
