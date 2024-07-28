// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log(`Fetching from cache for arguments: ${args}`);
      return cache[key];
    }

    console.log(`Calculating result for arguments: ${args}`);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function slowFunction(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(10));
console.log(memoizedSlowFunction(10));
console.log(memoizedSlowFunction(20));
console.log(memoizedSlowFunction(10));
