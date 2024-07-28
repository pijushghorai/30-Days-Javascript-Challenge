// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
  let cont = 0;

  return {
    increment: function () {
      return cont++;
    },

    getValue: function () {
      return cont;
    },
  };
}

const createCounter = counter();
createCounter.increment();
console.log(createCounter.getValue());

createCounter.increment();
createCounter.increment();
createCounter.increment();
console.log(createCounter.getValue());
