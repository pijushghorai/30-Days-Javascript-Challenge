// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const maxOfRest = findMax(arr.slice(1));

  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(`Max of [1, 2, 3, 4, 5]: ${findMax([1, 2, 3, 4, 5])}`);
console.log(`Max of [10, 20, 30, 5, 15]: ${findMax([10, 20, 30, 5, 15])}`);
console.log(`Max of [0, -1, -2, -3]: ${findMax([0, -1, -2, -3])}`);
console.log(
  `Max of [-10, -20, -30, -5, -15]: ${findMax([-10, -20, -30, -5, -15])}`
);
console.log(`Max of [100]: ${findMax([100])}`);
