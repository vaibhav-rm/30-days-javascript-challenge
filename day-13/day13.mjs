import axios from 'axios';
import lodash from 'lodash';
const { ceil } = lodash;

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
const addTwo = (a, b) => a + b;

export {addTwo};

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
    name: "vaibhav",
    age: 18,
    walk: function() {
        console.log("walking..");
    }
}

export {person};

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const subtwo = (a, b) => a - b;
const divTwo = (a, b) => a / b;
const mulTwo = (a, b) => a * b;

export {subtwo, divTwo, mulTwo};

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
const printHello = () => console.log("Hello...");

export default printHello;

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
const n1 = 5;
const n2 = 4;
const n3 = 9;
const n4 = 7;

export {n1, n2, n3, n4};

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
console.log(ceil(2.3));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const API = 'https://jsonplaceholder.typicode.com';

const fetchPosts = async () => {
  try {
    const url = `${API}/posts`;
    const response = await axios.get(url);
    console.log(response.data[0]);
  } catch (error) {
    console.error(error);
  }
};

fetchPosts(); 

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
