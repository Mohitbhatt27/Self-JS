const fs = require('fs');
let fileStream = fs.createReadStream(__dirname + "/12.1.input.txt");
const transformStream = require('stream');
let outputStream = process.stdout;

//whatever is your writable stream, we put a pipe on it and we pass the readable stream as an argument to the pipe function.

let middleStream = new transformStream.Transform({
    transform(chunk, encoding, nextCallback){
        let modiedChunk = chunk.toString().toUpperCase();
        this.push(modiedChunk);
        setTimeout(nextCallback, 4000);
    }
});

//Syntax: readableStream.pipe(writableStream);
//fileStream.pipe(outputStream);

//we were not able to feel that chunk by chunk reading. There is an internal module called stream that we can use to see the chunk by chunk reading.

fileStream.pipe(middleStream).pipe(outputStream);