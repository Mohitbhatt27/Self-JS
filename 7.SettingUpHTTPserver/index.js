// using http module, which is inbuilt in nodejs, we can setup a basic server

const http = require('http');
const PORT = 3000;

/*

Http module contains a method called createServer, which takes a callback function as an argument. The createServer method returns a server object.

The callback function takes two arguments, request and response.

request -> this argument contains all the details about the incoming request

response -> this argument contains all the methods to respond to the request

*/

const server = http.createServer((req, res) => {
    //console.log(req.url);
    console.log(req.method);
    if(req.url === '/'){
        res.end('welcome to our home page');
    }
    else if(req.url === '/faq'){
        res.end('here is our short history');
    }
    else{
      res.end('Hello World again');
    }
});

server.listen(PORT, function process(){
    //once the server is up and running, this callback function will be executed    
    console.log(`Server is running on port ${PORT}`);
});