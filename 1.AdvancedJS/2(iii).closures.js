function a(name){
    return function b(){
        console.log(name);
    }
}

let x = a("Mohit"); // x = [Function: b];
console.log(x); //this prints [Function: b]
x(); //now x is function b, so it prints Mohit

// Even though b() was executed later, it remembers its lexical scoping, by remembering lexical scoping we mean that it remembers that it had access to a variable name, and it still has access to it.



