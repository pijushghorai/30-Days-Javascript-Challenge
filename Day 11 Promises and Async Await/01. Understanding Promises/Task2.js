// Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Something went wrong!"));
  }, 2000);
});

promise.catch((error) => {
  console.error("Error caught:", error.message);
});
