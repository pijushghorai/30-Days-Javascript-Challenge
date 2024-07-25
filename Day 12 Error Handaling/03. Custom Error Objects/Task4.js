// Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class CoustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Coustom Error";
  }
}

function errorFunction() {
  throw new CoustomError("Something went wrong in errorFunction!");
}

try {
  errorFunction();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
