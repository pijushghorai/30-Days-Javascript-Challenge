function LargestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`largest number is ${num1}`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`largest number is ${num2}`);
  } else {
    console.log(`largest number is ${num3}`);
  }
}

LargestNumber(22, 56, 41);
