function blockingForLoop() {
  for (let i = 0; i < 1000000000; i++) {}
  console.log('start of file');
  setTimeout(function timer1() {
    console.log('timer1 done');
  }, 0);
}
blockingForLoop();

let x = Promise.resolve('Abhishek');
x.then(function process(value) {
  console.log("Who's promise", value);

  setTimeout(function timer2() {
    console.log('timer2 done');
  }, 0);
});

let y = Promise.resolve('Abhishek1');
y.then(function process2(value) {
  console.log("Who's promise", value);

  setTimeout(function timer3() {
    console.log('timer3 done');
  }, 0);
});

setTimeout(function timer4() {
  console.log('timer4 done');
}, 0);

console.log('end of file');
