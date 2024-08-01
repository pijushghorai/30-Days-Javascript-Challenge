// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases. 

function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
  }
  

  console.log(`Sum of [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`); 
  console.log(`Sum of [10, 20, 30]: ${sumArray([10, 20, 30])}`); 
  console.log(`Sum of [0, 0, 0, 0]: ${sumArray([0, 0, 0, 0])}`); 
  console.log(`Sum of [-1, -2, -3, -4]: ${sumArray([-1, -2, -3, -4])}`); 
  console.log(`Sum of []: ${sumArray([])}`); 
  