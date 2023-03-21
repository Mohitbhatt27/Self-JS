/*
 * setTimeout and setInterval are not by default given by JS.
 *
 * setTimeout is a fn that helps us to execute some task once after a certain timer.
 * 
 * setInterval is a fn that helps us to execute some task again and again after a given interval.
 * 
 */

/*
 * Callbacks fn is a fn passed into another fn as an argument.
 * f(g(x)) --> g(x) is a callback
 */


function fun (x,fn){
    //x -> number and fn -> callback function

    //some logic
    for(let i = 0; i<x; i++){
        console.log(i);
    }
    fn(); //calling the callback

    //some more logic
}

fun(10,function log(){
    //this is the callback function
    console.log("logger");
})

/**
 * Use cases of callback:
 */
 let arr = [1,2,3,4,5];
  let x = arr.map(function process(value,index){
    console.log(value, index);
  });
 
  console.log(x); //[ undefined, undefined, undefined, undefined, undefined ]
  //inside the callback fn we are not returning anything so it returns undefined


let nums = [1, 2, 3, 4, 5];
let y = nums.map(function process(value, index) {
  console.log(value, index);
  return value * value;
});

console.log(y); //[ 1, 4, 9, 16, 25 ]



