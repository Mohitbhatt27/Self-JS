### Fullfilled Promise

**When do we consider a promise fulfilled?**

- if we call resolve (), we consider it fulfilled.
- we consider it rejected, if we call reject ()

# Consuming a promise

- the promise consumption is the main beauty, using which we will avoid inversion of controls.
- whenever we call a function, returning a promise, we will get a promise object which is like any javascript object that we can store in a variable.

# Will JS wait here for promise to be resolved if it involves any async piece of code ?

- if creation of promise involves sync piece of code it will wait, otherwise not.

