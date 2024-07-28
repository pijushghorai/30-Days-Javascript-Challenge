// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray(size) {
  const functionArray = [];

  for (let i = 0; i < size; i++) {
    functionArray.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functionArray;
}

const functions = createFunctionArray(5);

functions[0](); 
functions[1](); 
functions[2](); 
functions[3](); 
functions[4](); 
