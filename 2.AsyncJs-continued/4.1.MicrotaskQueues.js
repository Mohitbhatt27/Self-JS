// The JavaScript engine has an event loop that waits for tasks. As tasks come in, they are executed in the order they arrive. Inside the event loop, there is a sub-queue called the Microtasks queue.

// The Microtask queue blocks the rest of the event loop from running until all Microtasks have been completed. Promises go into the Microtasks queue. This is why applications “wait” for Promises to resolve before moving on to the next task.

/**
 * Microtask queues are a part of the event loop in JavaScript that handle the execution of certain types of asynchronous operations, including promises. 
 * When a promise is fulfilled or rejected, any callbacks that were added to the promise using the then() method are added to the microtask queue. 
 * The event loop then executes each callback in the microtask queue in order, before moving on to process any other types of events.

For example, suppose we have two promises that are fulfilled in quick succession:
 */

Promise.resolve('First promise').then((data) => console.log(data));
Promise.resolve('Second promise').then((data) => console.log(data));

/**
 * Microtask queues are important because they allow developers to control the order in which asynchronous operations are processed, and to ensure that dependent operations are executed in the correct order.
 */
