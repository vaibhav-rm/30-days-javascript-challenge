// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function catchError() {
    try {
        const sum = null;
        console.log(sum.length);
    } catch(error) {
        console.error("error :"+error);
    }
}

catchError();

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideNumbers(numerator, denominator) {
    try {
        if (denominator === 0) {
            throw new Error("Cannot divide by zero");
        }
        const result = numerator / denominator;
        console.log(`The result is: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

divideNumbers(10, 2);
divideNumbers(10, 0);

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function exampleFunction() {
    try {
        console.log("Inside try block: About to attempt risky operation.");
        
        let riskyOperation = true;
        if (riskyOperation) {
            throw new Error("An error occurred during the risky operation.");
        }
        
        console.log("This message will not be logged if an error is thrown.");
    } catch (error) {
        console.log("Inside catch block: Caught an error.");
        console.error(`Error message: ${error.message}`);
    } finally {
        console.log("Inside finally block: This code always runs.");
    }
}

exampleFunction();

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function throwErrorExample() {
    try {
        throw new ValidationError("This is a custom validation error.");
    } catch (error) {
        console.log(`Caught an error: ${error.name} - ${error.message}`);
    }
}

throwErrorExample();

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class InputError extends Error {
    constructor(message) {
        super(message);
        this.name = "InputError";
    }
}

function validateInput(input) {
    if (input.trim() === "") {
        throw new InputError("Input cannot be empty.");
    }
    return true;
}

function handleInputValidation() {
    try {
        const userInput = ""; 
        validateInput(userInput);
        console.log("Input is valid.");
    } catch (error) {
        console.log(`Error: ${error.name} - ${error.message}`);
    }
}

handleInputValidation();

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected with an error.");
        }
    });
}

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(`Caught an error: ${error}`);
    });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.log(`Error caught in async function: ${error}`);
    }
}

handleRandomPromise();

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://invalidurl.com/api")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(`Fetch error: ${error.message}`);
    });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchWithAsync() {
    try {
        const response = await fetch("https://invalidurl.com/api");
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Async fetch error: ${error.message}`);
    }
}

fetchWithAsync();
