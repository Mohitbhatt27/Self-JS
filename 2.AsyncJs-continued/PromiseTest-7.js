const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);

/**
 * We go inside promise constructor, and 1 is printed.
 * A timeout of 0 seconds is set, and send in macrotask queue.
 * 2 is printed.
 * Promise is now created with status pending, and onFulfilled and OnReject array empty.
 * .then is not executed since promise is not resolved or rejected yet.
 * 4 is printed.
 * stack is empty, so macrotask queue is executed, and timerStart is printed.
 * Promise is resolved with success and then is pushed to microtask queue. There is still global code left to execute, so it wont be executed yet.
 * timerEnd is printed.
 * stack is empty, so microtask queue is executed, and then success is printed.
 * 
 * So correct output is:
 * 1
 * 2
 * 4
 * timerStart
 * timerEnd
 * success
 * 
 */