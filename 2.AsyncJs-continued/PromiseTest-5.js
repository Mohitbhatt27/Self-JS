console.log('start');

Promise.resolve(1).then((res) => {
  console.log(res);
});

Promise.resolve(2).then((res) => {
  console.log(res);
});

console.log('end');

/**
 * start is printed
 * A promise is created and resolved with value 1, it is pushed in microtask queue, since there is global code left to execute
 * A promise is created and resolved with value 2, it is pushed in microtask queue, since there is global code left to execute
 * end is printed
 * stack is empty, so microtask queue is executed, and then 1 is printed
 * stack is empty, so microtask queue is executed, and then 2 is printed
 */