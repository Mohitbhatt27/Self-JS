console.log('start');

setTimeout(() => {
  console.log('setTimeout');
});

Promise.resolve().then(() => {
  console.log('resolve');
});

console.log('end');

/**
 * start is printed
 * setTimeOut is pushed in the microtask queue, since there is global code left to execute
 * A promise is created and resolved, it is pushed in microtask queue, since there is global code left to execute
 * end is printed
 * stack is empty, so microtask queue is executed, and then resolve is printed
 * stack is empty, so microtask queue is executed, and then setTimeout is printed
 */