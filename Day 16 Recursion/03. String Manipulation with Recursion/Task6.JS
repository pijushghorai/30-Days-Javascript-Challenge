// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}

console.log(`Is 'racecar' a palindrome? ${isPalindrome("racecar")}`);
console.log(`Is 'hello' a palindrome? ${isPalindrome("hello")}`);
console.log(`Is 'madam' a palindrome? ${isPalindrome("madam")}`);
console.log(`Is 'a' a palindrome? ${isPalindrome("a")}`);
console.log(`Is '' a palindrome? ${isPalindrome("")}`);
