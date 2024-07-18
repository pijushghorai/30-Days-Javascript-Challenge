const arr = [1, 2, 3, 4, 5];

let sumofNum = arr.reduce((accumulator, item) => {
    return accumulator += item
}, 0)

console.log(sumofNum);