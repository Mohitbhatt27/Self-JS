console.log('Start of the file');

setTimeout(function timer1() {
  console.log('Timer 1 done');
  let y = Promise.resolve('Immediately promise');
  y.then(function promiseY(value) {
    console.log('Whose promise ?', value);
  });
}, 0);

let x = Promise.resolve("Mohit's promise");
x.then(function processPromise(value) {
  console.log('Whose promise ? ', value);
});

setTimeout(function timer2() {
  console.log('Timer 2 done');
}, 0);

console.log('End of the file');
