// Task 6 : Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student {
  static numberOfStudent = 0;

  constructor(name) {
    this.name = name;
    Student.numberOfStudent++;
  }
}

const student1 = new Student("Ram");
const student2 = new Student("Saam");
const student3 = new Student("Jodu");

console.log(Student.numberOfStudent);
