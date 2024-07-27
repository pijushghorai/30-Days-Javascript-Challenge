// Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function message(name) {
  return `Hello ${name} Good Morning! Have a nice Day`;
}

function addTwoNumber(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
}

function goodbymsg() {
  return `Ok Tata... see you soon`;
}

export { message, addTwoNumber, goodbymsg };
