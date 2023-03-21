/*
-> JS is a single threaded language.
-> JS by default only supports synchronous code execution.

console.log("start");
for(let i = 0; i<100000000000000; i++){};
console.log("end");

-> The above property of sync code execution only works for operations natively known to javascript.

-> Native piece of code meaning something that is natively known to JS, like for loop, or whatever is there in the documentation.

*/

console.log('start');
setTimeout(function pro() {
  console.log('inside settimeout');
}, 5000);
console.log('start again');

/**
 Q. Given the fact that setTimeout is not a feature of JS, how are we able to use it?

 A- There is a concept of JS runtime. Initially JS was made to run inside browser only. Browser gave JS a lot of facility for a program to run. Browser gives that execution envirnment to JS. 
 
 Browser acted as a runtime. JS alone is very weak. Browser gives some browser based features, like DOM APIs - interact with DOM, like document.getElementbyid is also not present in the documentation. It is feature provided by Browser runtime. 

 Similarly, setTimeout is timer based functionality that browser can maintained. So the browser runtime gives JS this feature to interact with the timer based functions. 
 
 These extra features that makes JS so powerful are provided by runtime.
 */


