// Write an async function that waits for a promise to resolve and then logs the resolved value.
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "aalupostoo", password: "1234" });
    } else {
      reject("JS went wrong!");
    }
  }, 2000);
});

async function finalPromise() {
  try {
    const responce = await myPromise;
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}

finalPromise();
