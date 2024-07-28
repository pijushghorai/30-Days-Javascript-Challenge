// ask 7: Add a getter method to the Person class to return the full name (assume a firstliame and lastlane property). Create an instance and log the full name using the getter.

class Person {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }

    getFullName() {
        return this.fname + " " + this.lname;
    }
}

let person1 = new Person("Rabindranath", "Tagore")
console.log(person1.getFullName());