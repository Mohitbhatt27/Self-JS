console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then((res) => {
  console.log(2);
});

console.log('end');

/**
 * start is printed
 * Promise1 is created with status pending, and onFulfilled and OnReject array empty.
 * then 1 is printed
 * Promise hasnt been resolved so or rejected, so then is not executed
 * end is printed
 */