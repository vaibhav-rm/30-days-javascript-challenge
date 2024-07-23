// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

// Activity 1: Template Literals

// Task 1
const name = 'Alice';
const age = 30;
const introduction = `My name is ${name} and I am ${age} years old.`;
console.log(introduction);

// Task 2
const multiLineString = `
    This is a multi-line string.
    It spans across multiple lines.
    Each line is preserved in the output.`;
console.log(multiLineString);

// Activity 2: Destructuring

// Task 3
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// Task 4
const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
};
const { title, author } = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators

// Task 5
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5, 6];
console.log(newArray);

// Task 6
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Activity 4: Default Parameters

// Task 7
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(5));    // Output: 5

// Activity 5: Enhanced Object Literals

// Task 8
const person = {
    name: 'John Doe',
    age: 25,
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};
console.log(person);
console.log(person.greet());

// Task 9
const key1 = 'firstName';
const key2 = 'lastName';
const user = {
    [key1]: 'Jane',
    [key2]: 'Doe'
};
console.log(user);
