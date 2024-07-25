// Use the fetch API to request data from an Invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://invalid.url/api/data")
  .then(function (responce) {
    if (!responce.ok) {
      throw new Error("response not here");
    }
    return responce.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error: ",error.message);
  });
