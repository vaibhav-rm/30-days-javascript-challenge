// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if (dogwalked) {
                resolve("You walked the dog");
            } else {
                reject("You didn't walk the dog");
            }

        }, 2000);
    });
}

walkDog().then((value) => console.log(value));


// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
function cleanHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleaned = false;

            if (cleaned) {
                resolve("You cleaned the house");
            } else {
                reject("You didn't clean the house");
            }

        }, 2000);
    });
}

cleanHome().then((value) => console.log(value))
           .catch((error) => console.error(error));

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
walkDog().then((value) => {console.log(value); return cleanHome()})
         .then((value) => console.log(value))
         .catch(error => console.error(error));

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function doWork() {

    const walkdog = await walkDog();
    console.log("Async function: "+walkdog);

}

doWork();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
async function doCleaningWork() {

    try {
        const cleaned = await cleanHome();
        console.log("Async function: "+cleaned);
    } catch (error) {
        console.error("Async function: "+error);
    }

}

doCleaningWork();

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("http://dog-api.kinduff.com/api/facts")
  .then(response => response.json())
  .then(data => {
    console.log(data["facts"][0]); 
  })
  .catch(error => {
    console.error('Error:', error); 
  });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchData() {
    try {
      const response = await fetch("https://dog-api.kinduff.com/api/facts");
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); 
      console.log(data["facts"][0]); 
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  fetchData();
  
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = fetch("https://dog-api.kinduff.com/api/facts").then(res => res.json());
const promise2 = fetch("https://api.thecatapi.com/v1/breeds").then(res => res.json());
const promise3 = fetch("https://api.agify.io?name=michael").then(res => res.json());

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log('All promises resolved with values:');
    console.log(values);
  })
  .catch(error => {
    console.error('Error occurred in one of the promises:', error);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const slowPromise = new Promise(resolve => setTimeout(() => resolve('Slow promise'), 3000));
const fastPromise = new Promise(resolve => setTimeout(() => resolve('Fast promise'), 1000));
const errorPromise = new Promise((_, reject) => setTimeout(() => reject('Error promise'), 2000));

Promise.race([slowPromise, fastPromise, errorPromise])
  .then(value => {
    console.log('First resolved promise:', value); 
  })
  .catch(error => {
    console.error('First rejected promise:', error);
  });
