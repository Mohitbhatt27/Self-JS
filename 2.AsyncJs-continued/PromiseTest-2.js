console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log('end');

/**
 * start is printed
 * then 1 is printed
 * then promise is resolved with val = 2, meaning the status of promise is changed to resolved, and onFulfilled array now has callback function with argument res=2. It wont be printed yet and will go to microtask queue, since there is global code left to execute.
 * then 3 is printed
 * end is printed
 * stack is empty, so microtask queue is executed, and then 2 is printed
 */