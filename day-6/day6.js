// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
numbers = [1, 2, 3, 4,5];
console.log(numbers);
console.log();

// Task 2: Access the first and last elements of the array and log them to the console.
console.log(numbers.at(0) +" is the first element");
console.log(numbers.at(-1) +" is the last element");
console.log();

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
numbers.push(6);
console.log(numbers +" updated array after push");
console.log();

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop();
console.log(numbers +" updated array after pop");
console.log();

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift();
console.log(numbers +" updated array after shift");
console.log();

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
numbers.unshift(2);
console.log(numbers +" updated array after unshift");
console.log();

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);
console.log();

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumbers = numbers.filter(number => number % 2 == 0);
console.log(evenNumbers);
console.log();

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);
console.log();

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log();

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
numbers.forEach(number => console.log(number));
console.log();

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        process.stdout.write(matrix[i][j].toString() + ' ');
    }
    console.log();
}
console.log();

// Task 13: Access and log a specific element from the two-dimensional array.
console.log(matrix[1][1]);