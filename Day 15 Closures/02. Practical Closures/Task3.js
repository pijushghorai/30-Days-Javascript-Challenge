// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateId() {
  let currentId = 0;
  return function () {
    currentId++;
    return currentId;
  };
}

const generateUniquId = generateId();
console.log(generateUniquId());
console.log(generateUniquId());
console.log(generateUniquId());
console.log(generateUniquId());
console.log(generateUniquId());
