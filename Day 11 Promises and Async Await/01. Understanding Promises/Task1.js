// Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Hello World")
    }, 2000)
})

myPromise.then(function(msg) {
    console.log(msg);
})