// Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidatesError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function vallidInput() {
    if (!input) {
        throw new ValidatesError('Input cannot be empty')
    }
    return true;
}

try {
    const userInput = '';
    vallidInput(userInput);
    console.log('Input is valid');
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}