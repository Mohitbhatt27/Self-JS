console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log('end');

/**
 * start is printed
 * then 1 is printed
 * then promise is resolved with val = 2
 * promise status is changed to resolved, and onfulfilled array is pushed with the callback function which has argument res. It wont be printed yet and will go to microtask queue, since there is global code left to execute
 * end is printed
 * stack is empty, so microtask queue is executed, and then 2 is printed
 */