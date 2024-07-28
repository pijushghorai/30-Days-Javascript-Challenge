// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreets(username) {
  return function () {
    return `Hello ${username}`;
  };
}

const login = createGreets("aalupostoo");
console.log(login());
