function test() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function exec() {
      console.log(`i:${i}`);
    }, i * 1000);
  }
}
test();

//let does not have test function scope, so there are 3 different i variable, one for timer 0s, one for time 1s, one for timer 2s

/*
i:0
i:1
i:2
*
 * This creates a new i variable for each iteration of the loop, which means that each setTimeout() function is passed a reference to a different i variable. As a result, when the setTimeout() functions finally do execute, each one logs a different value of i, because each one has a reference to a different i variable.
 */
