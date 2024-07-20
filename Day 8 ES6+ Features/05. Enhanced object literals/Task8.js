const name = "Pijush Ghorai";
const age = 24;
const job = "Frontend Developer";

const person = {
  name,
  age,
  job,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.job}.`);
  },

  ["ageIn" + "Years"]: function (years) {
    return this.age + years;
  },
};

console.log(person);

person.greet();
console.log(`Age in 5 years: ${person.ageInYears(5)}`);
