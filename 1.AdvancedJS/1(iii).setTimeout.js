//setTimeout(taskCallback, timeInMilliseconds);

console.log('start');
setTimeout(function fn() {
  //some task
  console.log('task completed');
}, 5000);
console.log('end');

//setTimeout returns a unique ID
//Use case of ID->clearTimeout(uniqueID) to cancel out timer

