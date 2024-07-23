// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddEven(num) {
    if (num % 2 == 0) {
        console.log("Even"+num);
    } else {
        console.log("Odd"+num);
    }
}

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
    return num * num;
}

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function greater(n1, n2) {
    if (n1 > n2) {
        console.log(n1+" is greater than "+n2);
    } else {
        console.log(n2+" is greater than "+n1);
    }
}

// Task 4: Write a function expression to concatenate two strings and return the result.
function concatStr(str1, str2) {
    return str1 + str2;
}

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
sum = (n1, n2) => {
    return n1 + n2;
}

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
wordCheck = (word, char) => {
    return (word.includes(char));
}

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
product = (num, num2 = 2) => {
    return num * num2;
}

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
greet = (name, age = 18) => {
    console.log("Hello! "+name+" of age "+age);
}

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
RepFunc = (func, times) => {
    for (let i = 1; i <= times; i++) {
        func()
    }
}

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}   