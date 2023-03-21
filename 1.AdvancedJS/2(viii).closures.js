
const add = (function exec () {
    let c = 0;
    return function process () {
        c+=1;
        return c;
    }})();

    console.log(add());
    console.log(add());
    console.log(add());

    //IIFE, makes c = 0, and returns function process(), now remember that variable add has function process stored in it. And then each console.log is simply calling the function process...Note that exec is executed only once, and process is executed thrice. Again remember that add=[function:process];

    /**
     * 1
     * 2
     * 3
     */
    
    