// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFun(a) {
  let b = 5;
  function innerFun() {
    return a + b;
  }
  return innerFun;
}

const inner = outerFun(6);
const result = inner();
console.log(result);
