// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1;
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, high);
  }
}

console.log(
  `Index of 5 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 5)}`
); // 4
console.log(
  `Index of 3 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 3)}`
); // 2
console.log(
  `Index of 1 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 1)}`
); // 0
console.log(
  `Index of 6 in [1, 2, 3, 4, 5]: ${binarySearch([1, 2, 3, 4, 5], 6)}`
); // -1
console.log(
  `Index of 10 in [1, 2, 5, 8, 10]: ${binarySearch([1, 2, 5, 8, 10], 10)}`
); // 4
