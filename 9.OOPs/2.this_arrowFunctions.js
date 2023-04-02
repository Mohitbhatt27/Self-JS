//this keyword and arrow functions in javascript



var obj1 = {
  name: 'obj1',
  print: () => {
    setTimeout(() => {
      console.log(this.name);
    }, 5000);
  },
  /**
   * In this, console.log (this) finds this inside setTimeout function, it's not there, so it finds it in print function, which is not there, so it finds it in global scope, where it's not there, so undefined is printed.
   */
};

var obj2 = {
  name: 'obj2',
  print: () => {
    console.log(this.name);
  },
  /**
   * In this, console.log (this) finds this in print function, which is not there, so it finds it in global scope, where it's not there, so undefined is printed.
   */
};

var obj3 = {
  name: 'obj3',
  print: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 5000);
  },
  /**
   * In this, console.log (this) finds this inside setTimeout function, it's not there, so it finds it in print function, print is a normal function, so this is found, hence it prints normally
   */
};

obj1.print(); //obj1
obj2.print(); //undefined
obj3.print(); //obj3

