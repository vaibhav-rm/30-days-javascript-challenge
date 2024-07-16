// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);;
}
console.log();

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i<= 10; i++) {
    console.log("5", " * ", i, " = ", 5*i)
}
console.log();

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1;
let sum = 0;
while(i <= 10) {
    sum += i;
    i++;
}

console.log("Sum of numbers from 1 to 10:",sum);
console.log();

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}
console.log();

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
i = 1;
do {
    console.log(i);
    i++
} while(i <= 5);
console.log();

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
i = 1;
fact = 5;
start = fact;
do {
    fact *= i;
    i++;
} while(i < start);
console.log(fact);
console.log();

// Task 7: Write a program to print a pattern using nested for loops
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}
console.log();

// Task 8: Write a program to print numbers from 1 to 10, skipping the number 5 using the continue statement.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
console.log();

// Task 9: Write a program to print numbers from 1 to 10, stopping the loop when the number is 7 using the break statement.
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}
