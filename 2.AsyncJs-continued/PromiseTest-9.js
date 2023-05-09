const timer1 = setTimeout(() => {
  console.log('timer1');

  const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log('timer2');
}, 0);


/**
 * Timer1 is created with 0 seconds delay, and pushed in the macrotask queue
 * Timer2 is created with 0 seconds delay, and pushed in the macrotask queue
 * stack is empty, so macrotask queue is executed, and then we go inside timer 1
 * timer 1 is printed
 * A promise is created and resolved, it is pushed in microtask queue, since there is global code left to execute
 * promise 1 is printed as microtask queue is executed
 * stack is empty, so macrotask queue is executed, and then we go inside timer 2
 * timer 2 is printed
 * 
 * So correct output is:
 * timer1
 * promise1
 * timer2
 */