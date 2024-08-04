// Day 19: Regular Expressions

// Activity 1: Basic Regular Expressions

// Task 1: Match all occurrences of the word "JavaScript" in a string
function matchJavaScript(str) {
    const regex = /JavaScript/g;
    const matches = str.match(regex);
    console.log(matches);
}

// Task 2: Match all digits in a string
function matchDigits(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    console.log(matches);
}

// Activity 2: Character Classes and Quantifiers

// Task 3: Match all words that start with a capital letter
function matchCapitalWords(str) {
    const regex = /\b[A-Z][a-z]*\b/g;
    const matches = str.match(regex);
    console.log(matches);
}

// Task 4: Match all sequences of one or more digits
function matchDigitSequences(str) {
    const regex = /\d+/g;
    const matches = str.match(regex);
    console.log(matches);
}

// Activity 3: Grouping and Capturing

// Task 5: Capture area code, central office code, and line number from a US phone number
function capturePhoneNumber(str) {
    const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
    const matches = str.match(regex);
    console.log(matches);
}

// Task 6: Capture username and domain from an email address
function captureEmail(str) {
    const regex = /(\w+)@(\w+\.\w+)/;
    const matches = str.match(regex);
    console.log(matches);
}

// Activity 4: Assertions and Boundaries

// Task 7: Match a word only if it is at the beginning of a string
function matchWordAtStart(str, word) {
    const regex = new RegExp(`^${word}`);
    const matches = str.match(regex);
    console.log(matches);
}

// Task 8: Match a word only if it is at the end of a string
function matchWordAtEnd(str, word) {
    const regex = new RegExp(`${word}$`);
    const matches = str.match(regex);
    console.log(matches);
}

// Activity 5: Practical Applications

// Task 9: Validate a simple password
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValid = regex.test(password);
    console.log(isValid);
}

// Task 10: Validate a URL
function validateURL(url) {
    const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/;
    const isValid = regex.test(url);
    console.log(isValid);
}

// Feature Request Implementations

// Basic Regex Script
matchJavaScript("JavaScript is a popular language. JavaScript can be used for both front-end and back-end development.");
matchDigits("The year 2024 is just around the corner. My phone number is 1234567890.");

// Character Classes and Quantifiers Script
matchCapitalWords("Hello world. This is a Test of matching Words with Capital Letters.");
matchDigitSequences("My phone number is 1234567890 and my zip code is 98765.");

// Grouping and Capturing Script
capturePhoneNumber("(123) 456-7890");
captureEmail("john.doe@example.com");

// Assertions and Boundaries Script
matchWordAtStart("JavaScript is great", "JavaScript");
matchWordAtEnd("Learn JavaScript", "JavaScript");

// Validation Script
validatePassword("StrongPass1@");
validateURL("https://www.example.com");

// Logging results for all tasks

console.log("Task 1 & 2 - Basic Regex Script:");
matchJavaScript("JavaScript is a popular language. JavaScript can be used for both front-end and back-end development.");
matchDigits("The year 2024 is just around the corner. My phone number is 1234567890.");

console.log("Task 3 & 4 - Character Classes and Quantifiers Script:");
matchCapitalWords("Hello world. This is a Test of matching Words with Capital Letters.");
matchDigitSequences("My phone number is 1234567890 and my zip code is 98765.");

console.log("Task 5 & 6 - Grouping and Capturing Script:");
capturePhoneNumber("(123) 456-7890");
captureEmail("john.doe@example.com");

console.log("Task 7 & 8 - Assertions and Boundaries Script:");
matchWordAtStart("JavaScript is great", "JavaScript");
matchWordAtEnd("Learn JavaScript", "JavaScript");

console.log("Task 9 & 10 - Validation Script:");
validatePassword("StrongPass1@");
validateURL("https://www.example.com");
