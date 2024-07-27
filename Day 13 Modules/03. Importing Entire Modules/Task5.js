//  Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

export { add, subtract, multiply };
