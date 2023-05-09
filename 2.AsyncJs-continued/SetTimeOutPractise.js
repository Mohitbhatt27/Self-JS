function cheese() {
  console.log('Add lots of cheese');
}
function patty(cheese) {
  cheese();
  console.log('Add veggies and patty');
}
function bun(patty) {
  console.log('take 2 fresh bun');
  patty(cheese);
}
function burger(bun) {
  setTimeout(() => {
    console.log('Burger is ready');
    bun(patty);
  }, 2000);
}

burger(bun);
console.log("let's make a burger");

// let's make a burger
// Burger is ready
// take 2 fresh bun
// Add lots of cheese
// Add veggies and patty
