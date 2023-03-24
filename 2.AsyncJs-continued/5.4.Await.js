async function fun() {
  console.log('entered');
  let x = await Promise.resolve(20); //the moment await is hit, we can assume that await will not wait even if it is a resolved promise

  console.log('exiting'); //await has assumed that everything after await is a promise so this is printed once we go back again on line 3 after stack is empty again
  return x;
}

console.log('Start');
let val = fun();
val.then(function f(value) {
  console.log('value is', value);
});

console.log('end');
