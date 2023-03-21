function todo(task) {
  console.log('start of TODO');
  setTimeout(function fn() {
    console.log('completed task');
  }, 5000);
  console.log('end of TODO');
}

console.log('Starting');
todo('Assignments');
console.log('Ending');

 /* At the time instance, when function fn will be called, i.e the callback function, the todo function is already over.

 If fn is called after the completion of todo, and todo has ended, how fn is able to access task variable?

This happens due to closure.

Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.

Closure is actually a live link (and not a snapshot), preserving access to the full variable itself. We’re not limited to merely reading a value;
the closed-over variable can be updated (re-assigned) as well!

By closing over a variable in a function, we can keep using
that variable (read and write) as long as that function reference exists in the program, and from anywhere we want to
invoke that function. 

This is why closure is such a powerful technique used widely across so many areas of programming!

 */


function todo1(task) {
  console.log('start of TODO');
  setTimeout(function fn() {
    console.log('completed task',task);
  }, 5000);
  console.log('end of TODO');
  task = "by Mohit";
}

console.log('Starting');
todo1('Assignments');
console.log('Ending');