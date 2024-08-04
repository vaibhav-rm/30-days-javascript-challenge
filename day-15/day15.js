// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    let outerVariable = 'I am from the outer scope';
    return function innerFunction() {
      console.log(outerVariable);
    };
  }
  
  const innerFunc = outerFunction();
  innerFunc(); // Logs: I am from the outer scope
  
  // Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
  function createCounter() {
    let counter = 0;
    return {
      increment: function() {
        counter++;
      },
      getValue: function() {
        return counter;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  console.log(counter.getValue()); // Logs: 2
  
  // Activity 2: Practical Closures
  
  // Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
  function createIdGenerator() {
    let lastId = 0;
    return function() {
      lastId++;
      return lastId;
    };
  }
  
  const generateId = createIdGenerator();
  console.log(generateId()); // Logs: 1
  console.log(generateId()); // Logs: 2
  
  // Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
  function createGreeter(name) {
    return function() {
      console.log(`Hello, ${name}!`);
    };
  }
  
  const greetJohn = createGreeter('John');
  greetJohn(); // Logs: Hello, John!
  
  // Activity 3: Closures in Loops
  
  // Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
  function createFunctionArray() {
    const functions = [];
    for (let i = 0; i < 5; i++) {
      functions.push((function(index) {
        return function() {
          console.log(index);
        };
      })(i));
    }
    return functions;
  }
  
  const functionArray = createFunctionArray();
  functionArray[0](); // Logs: 0
  functionArray[1](); // Logs: 1
  
  // Activity 4: Module Pattern
  
  // Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
  const itemModule = (function() {
    const items = [];
    return {
      addItem: function(item) {
        items.push(item);
      },
      removeItem: function(item) {
        const index = items.indexOf(item);
        if (index > -1) {
          items.splice(index, 1);
        }
      },
      listItems: function() {
        return items.slice();
      }
    };
  })();
  
  itemModule.addItem('Apple');
  itemModule.addItem('Banana');
  console.log(itemModule.listItems()); // Logs: ['Apple', 'Banana']
  itemModule.removeItem('Apple');
  console.log(itemModule.listItems()); // Logs: ['Banana']
  
  // Activity 5: Memoization
  
  // Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
  function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (!cache[key]) {
        cache[key] = fn(...args);
      }
      return cache[key];
    };
  }
  
  // Task 8: Create a memoized version of a function that calculates the factorial of a number.
  function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  console.log(memoizedFactorial(5)); // Logs: 120
  console.log(memoizedFactorial(6)); // Logs: 720 (computes quickly using cached result of factorial(5))
  