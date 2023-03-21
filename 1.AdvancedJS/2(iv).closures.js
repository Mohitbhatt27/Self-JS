/**
 * Q that may come in someone's mind:- If function a() is removed from call stack how actually the variables still persist? Where are they?
 *
 *  When an outer function is removed from the call stack, its variables are still accessible to the inner function because the inner function maintains a reference to the outer function’s scope
 */


/**
 * In JavaScript, the 'mark-and-sweep' algorithm is used for garbage collection. The algorithm works by first marking all the objects that are still in use and then sweeping the memory to remove the objects that are not marked. 
 * The algorithm starts by marking all the objects that are still in use, starting from the global object and working its way down the object graph. Any object that is not marked is considered to be garbage and is removed from memory. 
 * The algorithm is called “mark-and-sweep” because it marks all the objects that are still in use and then sweeps the memory to remove the objects that are not marked
 */
