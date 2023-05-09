//If the value returned by await is not a promise, it will convert it into a promise

async function f() {
  let y = await 20;
  console.log(y);

  let obj = {};
  console.log(obj == (await obj)); //true
}
f();

//If a Promise is passed to an await expression, it waits for the Promise to be fulfilled and returns the fulfilled value.

//Hence typeof y would be number
