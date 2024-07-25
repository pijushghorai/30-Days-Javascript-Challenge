// Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchData() {
  try {
    const responce = await fetch("https://invalid.url/api/data");
    if (!responce.ok) {
        throw new Error('response not here')
    }
    const data = await responce.json()
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

fetchData()