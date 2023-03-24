function dummyPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Timer's promise");
    }, 10000);
  });
}
console.log('Start of the file');

setTimeout(function timer1() {
  console.log('Timer 1 done');
  let y = dummyPromise();
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

/*
Start of the file
End of the file
Whose promise ?  Mohit's promise
Timer 1 done
Timer 2 done
Whose promise ? Timer's promise
*/