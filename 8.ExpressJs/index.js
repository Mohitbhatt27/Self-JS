const express = require('express');
//creating an express app object by calling the express function
const app = express();
const port = 3000;

app.get('/',function(req,res){
    res.send("Hello World");
});

app.post('/home',function(req,res){
    res.send("Welcome home");
});

app.patch('/home',function(req,res){
    res.send("A patch request");
});

app.put('/home',function(req,res){
    res.send({
        message : "A put request",
        sender : "Mohit"
    });
});

app.listen(port,function process(){
    console.log("server started");
});
