// Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static greeting() {
    return "Hello!";
  }
}

console.log(Person.greeting());
