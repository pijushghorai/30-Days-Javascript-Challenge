const arr = [1, 2, 3, 4, 5];

let evenArray = arr.filter((item) => {
    return item % 2 === 0
})

console.log(evenArray);