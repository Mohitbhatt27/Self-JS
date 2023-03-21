function test(){
    for(var i = 0; i<3; i++){
        setTimeout(function exec(){
            console.log(`i:${i}`);
        },i*1000);
    }
}
test();


//var gives i the function scope of test, so only one i variable is created even when loop is running thrice... However if we have used let in place of var, then let does not have test function scope, so there are 3 different i variable, one for timer 0s, one for time 1s, one for timer 2s

/*
i:3
i:3
i:3
*
 * The test() function is creating a closure that contains a for loop that iterates three times. Inside the loop, a setTimeout() function is called with a delay that is equal to the current value of i multiplied by 1000 milliseconds. The setTimeout() function is passed an anonymous function that logs the value of i to the console.

When test() is called, the for loop is executed three times, and each time the setTimeout() function is called with a different delay. However, because the setTimeout() function is asynchronous, the loop continues to execute before the first setTimeout() function has a chance to execute. As a result, when the setTimeout() functions finally do execute, the value of i is always 3, because that is the final value of i when the loop completes.

So, when you run the code, you will see that the value of i is logged to the console three times, but each time it is logged as 3, because that is the final value of i when the loop completes.

 */