function fun (x,fn){
    console.log("Inside Fun");
    fn();
}

function g(){
    console.log("Inside g");
}
fun (10,g);
//fun(10,g()); do not write g() in ln 9, since that will immediately call the function and store the return type of that function as the 2nd parameter in line number 9. The return type here is undefined.

