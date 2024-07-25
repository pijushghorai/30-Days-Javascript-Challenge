// Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const randomPromise = new Promise(function (resolve, rejct) {
    const randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber);
    if (randomNumber > 10) {
      resolve("Promise resolved sucessfully");
    } else {
      rejct("Promise Rejected");
    }
  });


async function handlePromise() {
    try {
        const responce = await randomPromise;
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
  }

  handlePromise()