function multiply(a, b = 1) {
  return a * b;
}

let result1 = multiply(5, 3);
console.log(`The result of multiply(5, 3) is: ${result1}`);

let result2 = multiply(5);
console.log(`The result of multiply(5) is: ${result2}`);
