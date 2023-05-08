var k = 0;
let j = setInterval(() => {
  k += 1;
  console.log(k);
  if (k === 10) {
    clearInterval(); // no id is passed, so it will clear all the intervals
  }
}, 1000);
