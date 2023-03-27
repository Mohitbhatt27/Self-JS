//we often write things like this"
console.log("Hello World");
console.log("Bye World");
//but we can also write things like this
process.stdout.write("Hello World");
process.stdout.write("Bye World");
//the difference is that the first one adds a new line after each line the second one does not

// There are different ways to read data, one of them is a stream. 

//A stream is a sequence of data made available over time. There are different types of streams, for example, there is a readable stream and a writable stream. 

//JS gives us a way to create readable streams, and it is called process.stdin.