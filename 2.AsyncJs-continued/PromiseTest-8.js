console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2');
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log('timer1');
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2');
  });
}, 0);

console.log('end');

/**
 * start is printed
 * promise1 is created and resolved with empty value, and pushed in microtask queue
 * timer1 is created with 0 seconds delay, and pushed in the macrotask queue
 * end is printed
 * stack is empty, so microtask queue is executed, and then we go inside promise1
 * promise1 is printed
 * timer2 is created with 0 seconds delay, and pushed in the macrotask queue
 * stack is empty, so macrotask queue is executed, and then we go inside timer1
 * timer1 is printed
 * promise2 is created and resolved with empty value, and pushed in microtask queue
 * stack is empty, so microtask queue is executed, and then we go inside timer2
 * promise2 is printed
 * timer2 is printed
 *
 * So correct output is:
 * start
 * end
 * promise1
 * timer1
 * promise2
 * timer2
 * 
 */