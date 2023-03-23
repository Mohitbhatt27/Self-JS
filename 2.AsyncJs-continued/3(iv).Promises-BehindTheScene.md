## Promises - Behind the scenes

The promise object we create has 4 major properties:-

## Usage

```
1- status /state
2- value
3- on fulfillment
4- on Reject

```

### 1. Status / State
status shows current promise status
1- pending state
2- fulfilled state → success
3- rejected state → error

**value** → when status of the promise is _pending_ , this value property is _undefined_.
The moment promise status → _fulfilled_ (or promise is resolved), the value property is updated from
undefined to the _new value_ ( this value we can consider as the returned value / resolved value)

Hence the _value property acts like a placeholder till the time promise finishes_.

**on fulfillment** → This is an array, which contains functions that we attach to our promise object .
(to a promise object we can attach some fame"
using Promise.then method) - when the value properly is updated from undefined ,
to the new value, JS gives chance to these attached function one by one with the value property as their argument (if there is no piece of code in the call stack & global code left)

```
return new Promise (function (resolve,reject)) {


}

```





