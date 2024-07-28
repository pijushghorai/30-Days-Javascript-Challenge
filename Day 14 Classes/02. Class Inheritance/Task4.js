// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getGreetingMsg() {
    return `Hello ${this.name}, Your age is ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return `Studet ID: ${this.studentId}`;
  }

  getGreetingMsg() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}`;
  }
}

let student1 = new Student("Avishek Nandi", 24, 123456);
console.log(student1.getGreetingMsg());
console.log(student1.getStudentId());
