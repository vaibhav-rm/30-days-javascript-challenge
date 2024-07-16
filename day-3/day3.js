// Task 1: Check if a number is positive, negative, or zero
let number = 10;

if (number > 0) {
    console.log(`${number} is positive`);
} else if (number < 0) {
    console.log(`${number} is negative`);
} else {
    console.log(`${number} is zero`);
}

// Task 2: Check if a person is eligible to vote
let age = 18;

if (age >= 18) {
    console.log(`Person is eligible to vote`);
} else {
    console.log(`Person is not eligible to vote`);
}

// Task 3: Find the largest of three numbers using nested if-else statements
let num1 = 10, num2 = 20, num3 = 15;
let largest;

if (num1 >= num2) {
    if (num1 >= num3) {
        largest = num1;
    } else {
        largest = num3;
    }
} else {
    if (num2 >= num3) {
        largest = num2;
    } else {
        largest = num3;
    }
}
console.log(`The largest number is: ${largest}`);

// Task 4: Determine the day of the week using switch case
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log(`Day ${dayNumber} is ${dayName}`);

// Task 5: Assign a grade based on a score using switch case
let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
}
console.log(`For score ${score}, the grade is ${grade}`);

// Task 6: Check if a number is even or odd using ternary operator
let num = 25;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(`Number ${num} is ${result}`);

// Task 7: Check if a year is a leap year using multiple conditions
let year = 2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(`Year ${year} is ${isLeapYear ? 'a leap year' : 'not a leap year'}`);
   