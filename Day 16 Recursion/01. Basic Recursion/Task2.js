// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(`Fibonacci of 0: ${fibonacci(0)}`); 
console.log(`Fibonacci of 1: ${fibonacci(1)}`); 
console.log(`Fibonacci of 5: ${fibonacci(5)}`); 
console.log(`Fibonacci of 7: ${fibonacci(7)}`); 
console.log(`Fibonacci of 10: ${fibonacci(10)}`); 
