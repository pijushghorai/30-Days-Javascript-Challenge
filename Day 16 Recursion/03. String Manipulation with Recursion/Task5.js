// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str.length <= 1) {
      return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, -1));
  }
  

  console.log(`Reverse of 'hello': ${reverseString('hello')}`); 
  console.log(`Reverse of 'world': ${reverseString('world')}`); 
  console.log(`Reverse of 'JavaScript': ${reverseString('JavaScript')}`); 
  console.log(`Reverse of 'a': ${reverseString('a')}`); 
  console.log(`Reverse of '': ${reverseString('')}`); 
  