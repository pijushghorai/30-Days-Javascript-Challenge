function sum(...rest) {
    let total = 0;
    for (const iterator of rest) {
        total = total + iterator
    }
    return total;
}

console.log(sum(1, 2, 3));