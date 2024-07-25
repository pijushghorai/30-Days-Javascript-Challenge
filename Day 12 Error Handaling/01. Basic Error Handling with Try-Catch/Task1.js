function throwError() {
  throw new Error("This is an intentional error!");
}

function handleError() {
  try {
    throwError();
  } catch (error) {
    console.error("Erroe:", error.message);
  }
}

handleError();
