// Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function tryCatchFinaly() {
  try {
    const num = 10;
    const result = num * 2;
    console.log("Result:", result);
  } catch (error) {
    console.log("Error Msg:", error.message);
  } finally {
    console.log("finally block: This always executes");
  }
}

tryCatchFinaly();
