console.log(process); //process global
//process is one of the globals. It helps us to get access to runtime process

//var process = 3; //we can do this because it is eventually a variable, so we can reallocate it.

console.log(__dirname); //gives current directory where we are running the program. This global is not always accessible.  __dirname is not accessible when using ECMAScript (ES) modules. They are different from the CommonJS module system used by default in Node.js.

// Read Execute Print Loop - Repl console - immediately reads and provide output. let x = 10, enter and it gives undefined. Like in browser and also in node terminal. There dirname is not accessible also.

console.log(module); 
