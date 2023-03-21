//let id = setTimeout({},5000);
//typeof(id) is object in node envirment and Number in browser envirnment
//due to different runtime

/**
  Given the fact that setTimeout is not a feature of Js and it does not follow synchornous execution, how is it executing?
 */

function process() {
  console.log('Start');
  setTimeout(function exec() {
    console.log('Executed some task');
  }, 3000);
  for (let i = 0; i < 1000000000; i++) {
    //some task
  }
  console.log('end');
}

process();
console.log("bye");

/* 
Q. We can easily do tasks that tak a lot of time to complete without blocking the code flow. How?

Call Stack - Normal call stack
Event Queue - When Runtime has completed it's task it waits in the queue to be popped out.
Event Loop - like infinite loop that keeps checking for the condition which when becomes true, pops the first item from Event Queue

Q. What is the condition that event loop is checking?

- The call stack should be empty, i.e., no function in the call stack is left to be executed.
- The global code is also done ->line 21
*/


