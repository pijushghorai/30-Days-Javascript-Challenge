// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) {
      return 0;
    }
  
    const count = arr[index] === target ? 1 : 0;
  
    return count + countOccurrences(arr, target, index + 1);
  }
  

  console.log(`Occurrences of 3 in [1, 2, 3, 4, 3, 5, 3]: ${countOccurrences([1, 2, 3, 4, 3, 5, 3], 3)}`); 
  console.log(`Occurrences of 1 in [1, 2, 3, 4, 5]: ${countOccurrences([1, 2, 3, 4, 5], 1)}`); 
  console.log(`Occurrences of 2 in [2, 2, 2, 2, 2]: ${countOccurrences([2, 2, 2, 2, 2], 2)}`); 
  console.log(`Occurrences of 5 in [1, 2, 3, 4]: ${countOccurrences([1, 2, 3, 4], 5)}`); 
  console.log(`Occurrences of 'a' in ['a', 'b', 'a', 'c', 'a']: ${countOccurrences(['a', 'b', 'a', 'c', 'a'], 'a')}`); // 3
  