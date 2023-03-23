/*
Callback hell, and 

The biggest disadvantage of CallBack is Inversion of control.

If there is some part of code whose control we are passing to someone else and we dont know how that part will be executed, this problem is called inversion of control.

You are handing over control of invoking future callbacks to a function you never wrote or perhaps even know how it works.

*/

function fun(str, fn){
    
    let output = str.split(","); 
    for(let i = 0; i<output.length; i++){
        fn(output[i]);
    }
}

//using it
fun("Name:Mohit,Subject:cse", function process(ip){
    let arr = ip.split(":");
    console.log("{", arr[0], "=>", arr[1], "}");
});

