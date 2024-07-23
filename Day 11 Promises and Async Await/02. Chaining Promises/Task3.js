// Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data from server 1");
      resolve("Data 1");
    }, 1000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data from server 2");
      resolve("Data 2");
    }, 2000);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched data from server 3");
      resolve("Data 3");
    }, 1500);
  });
}

fetchData1()
  .then((data1) => {
    console.log("Processing data 1: ", data1);
    return fetchData2();
  })
  .then((data2) => {
    console.log("Processing data 2: ", data2);
    return fetchData3();
  })
  .then((data3) => {
    console.log("Processing data 3: ", data3);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
