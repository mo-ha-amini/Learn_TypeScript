// Callback:
// A callback function is a function that is passed as an argument to another function
// and is called when the parent function has finished executing.

function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData);

//   When fetchData is called with displayData as the callback, it will call
//   displayData with the data after the 1-second delay.
// ---------------------------------------------------------------------------------------------

// Promise:
// A promise is an object that represents the eventual completion (or failure) of
// an asynchronous operation and allows us to handle the result of that operation when it's ready.

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 1000);
  });
}

fetchData2()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// In this example, fetchData returns a new promise that resolves with the data after
// a delay of 1 second. We can then use .then to handle the resolved value (i.e., the data)
// and .catch to handle any errors that occur during the promise's execution.
// ---------------------------------------------------------------------------------------------

// Async/Await:
// Async/await is a syntax for writing asynchronous code that looks synchronous.
// It's built on top of promises and allows us to write asynchronous code in a more readable
// and concise way.

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      resolve(data);
    }, 1000);
  });
}

async function displayData2() {
  try {
    const data = await fetchData3();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

displayData2();

// In this example, fetchData is the same as in the previous example, and displayData is 
// an async function that uses await to wait for fetchData to resolve before logging the
// data to the console. If an error occurs during the execution of fetchData, it will be 
// caught and handled by the catch block.
