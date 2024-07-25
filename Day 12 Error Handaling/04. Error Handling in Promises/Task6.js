// Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise(function (resolve, rejct) {
  const randomNumber = Math.floor(Math.random() * 20);
  console.log(randomNumber);
  if (randomNumber > 10) {
    resolve("Promise resolved sucessfully");
  } else {
    rejct("Promise Rejected");
  }
});

randomPromise
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });
