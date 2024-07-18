function applyFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
}

const addOne = x => x + 1;
const square = x => x * x;

const result = applyFunctions(addOne, square, 5); // (5 + 1) * (5 + 1)

console.log(result);
