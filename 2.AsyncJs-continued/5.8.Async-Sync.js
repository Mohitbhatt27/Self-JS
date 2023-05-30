// Synchronous function
function synchronousAdd(a, b) {
  console.log('Starting synchronous add...');
  const result = a + b;
  console.log('Result:', result);
  console.log('Ending synchronous add...');
  return result;
}

// Asynchronous function
function asynchronousAdd(a, b, callback) {
  console.log('Starting asynchronous add...');
  setTimeout(function () {
    const result = a + b;
    console.log('Result:', result);
    console.log('Ending asynchronous add...');
    callback(result);
  }, 1000);
}

// Call synchronous function
console.log('Calling synchronous add...');
const syncResult = synchronousAdd(2, 3);
console.log('Synchronous result:', syncResult);

// Call asynchronous function
console.log('Calling asynchronous add...');
asynchronousAdd(2, 3, function (asyncResult) {
  console.log('Asynchronous result:', asyncResult);
});
console.log('Asynchronous add called...');

// In this example, we have two functions that add two numbers: synchronousAdd and asynchronousAdd. The synchronousAdd function adds the two numbers synchronously and returns the result, while the asynchronousAdd function adds the two numbers asynchronously using setTimeout and calls a callback function when done.

// The program calls both functions with the same arguments (2 and 3) and logs the results to the console.

// First, it calls the synchronous function and logs the results synchronously. Then, it calls the asynchronous function and logs the results asynchronously using the callback function. Finally, it logs that the asynchronous function has been called.

// The output of the program would be:

// Calling synchronous add...
// Starting synchronous add...
// Result: 5
// Ending synchronous add...
// Synchronous result: 5
// Calling asynchronous add...
// Starting asynchronous add...
// Asynchronous add called...
// Result: 5
// Ending asynchronous add...
// Asynchronous result: 5

// In this example, the synchronous function is called first, and the asynchronous function is called second. However, the asynchronous function finishes after the synchronous function. This is because the synchronous function is called synchronously, while the asynchronous function is called asynchronously.