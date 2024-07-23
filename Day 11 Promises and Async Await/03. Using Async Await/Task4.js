// Write an async function that waits for a promise to resolve and then logs the resolved value.
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "aalupostoo", password: "1234" });
    } else {
      reject("JS went wrong!");
    }
  }, 2000);
});

async function finalPromise() {
  const responce = await myPromise;
  console.log(responce);
}

finalPromise();
