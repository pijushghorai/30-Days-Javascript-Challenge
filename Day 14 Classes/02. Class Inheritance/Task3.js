// Task 3: Define a class Studert that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID

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
}

let student1 = new Student("Avishek Nandi", 24, 123456);
console.log(student1.getGreetingMsg());
console.log(student1.getStudentId());
