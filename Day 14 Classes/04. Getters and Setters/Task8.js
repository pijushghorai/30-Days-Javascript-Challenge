// Task 8: Add a saltter method to the Person class to update the name properties (firstName and lasthame). Update the name using the setter and log the updated full name.

class Person {
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }

    getFullName() {
        return this.fname + " " + this.lname;
    }

    setFullName(newfname, newlname) {
        this.fname = newfname;
        this.lname = newlname
    }
}

let person1 = new Person("Pijush", "Ghorai")
person1.setFullName("Aalu", "Postoo")
console.log(person1.getFullName());
