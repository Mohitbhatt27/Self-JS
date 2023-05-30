console.log('start');

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

console.log('middle');

fn().then((res) => {
  console.log(res);
});

console.log('end');

/**
 * start is printed
 * fn is a function which is not yet called.
 * middle is printed
 * fn is called, so go inside the function, and then 1 is printed. Promise is resolved with success. res = success, but then is in the microtask queue, since there is global code left to execute
 * end is printed
 * stack is empty, so microtask queue is executed, and then success is printed
 */

// //