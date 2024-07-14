// Day 1: Variables and Data Types

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.
var num = 10;
console.log(num); // Output: 10

// Task 2: Declare a variable using `let` and assign it a string, then log the value to the console.
let str = 'Hello World!';
console.log(str); // Output: Hello World!

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.
const bool = true;
console.log(bool); // Output: true

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the `typeof` operator.
let numType = 10;
let strType = 'Hello World!';
let boolType = true;
let objType = { name: 'John', age: 30 };
let arrType = [1, 2, 3, 4, 5];

console.log(`numType: ${numType} (type: ${typeof numType})`);
console.log(`strType: ${strType} (type: ${typeof strType})`);
console.log(`boolType: ${boolType} (type: ${typeof boolType})`);
console.log(`objType: ${JSON.stringify(objType)} (type: ${typeof objType})`);
console.log(`arrType: ${JSON.stringify(arrType)} (type: ${typeof arrType})`);

// Task 5: Declare a variable using both `var` and `let`, assign them initial values, reassign their values, and log both values to the console.
var varVar = 10;
let letVar = 'Hello';

console.log(varVar); // Output: 10
console.log(letVar); // Output: Hello

varVar = 20;
letVar = 'World';

console.log(varVar); // Output: 20
console.log(letVar); // Output: World

// Task 6: Try reassigning a variable declared with `const` and observe the error.
const constVar = 10;
console.log(constVar); // Output: 10

// Try to reassign constVar
constVar = 20; // Error: Assignment to constant variable.

// Feature Request: Variable Types Console Log
let numLog = 10;
let strLog = 'Hello World!';
let boolLog = true;
let objLog = { name: 'John', age: 30 };
let arrLog = [1, 2, 3, 4, 5];

console.log(`numLog: ${numLog} (type: ${typeof numLog})`);
console.log(`strLog: ${strLog} (type: ${typeof strLog})`);
console.log(`boolLog: ${boolLog} (type: ${typeof boolLog})`);
console.log(`objLog: ${JSON.stringify(objLog)} (type: ${typeof objLog})`);
console.log(`arrLog: ${JSON.stringify(arrLog)} (type: ${typeof arrLog})`);

// Feature Request: Reassignment Demo
let letDemo = 'Hello';
let constDemo = 'World';

console.log(letDemo); // Output: Hello
console.log(constDemo); // Output: World

letDemo = 'Goodbye';
// Try to reassign constDemo
constDemo = 'Universe'; // Error: Assignment to constant variable.

console.log(letDemo); // Output: Goodbye
console.log(constDemo); // Output: World (no change)