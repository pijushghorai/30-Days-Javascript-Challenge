fetch('https://jsonplaceholder.typicode.com/posts/')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})