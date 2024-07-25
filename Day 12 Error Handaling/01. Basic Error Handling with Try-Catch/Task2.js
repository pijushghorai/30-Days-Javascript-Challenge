// create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function devideNumber(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }
    return numerator / denominator;
  } catch (error) {
    console.log("Error:", error.message);
  }
}

const result = devideNumber(10, 0);
console.log(result);
