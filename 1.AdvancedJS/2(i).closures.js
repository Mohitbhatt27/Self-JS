function todo(task){
    setTimeout(function fn(){
        console.log("completed task");
    } , 2000);
}

console.log("Starting");
todo("Assignments");
console.log("Ending");

/**
 * Timer is started due to move 8, and then move ahead to line 9
 * Line number 9 is executed.
 * 
 * At the time instance, when function fn will be called, i.e the callback function, the todo function is already over.
 * 
 */


