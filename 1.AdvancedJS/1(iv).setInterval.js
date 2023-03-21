setInterval(function(){
    console.log("task done");
},3000);

//using setInterval, clearInterval and setTimeout together

let id = setInterval(function () {
  console.log('task done');
}, 3000);

setTimeout(function(){
    clearInterval(id);
},20000);

//we used setTimeout and clearInterval together to stop setInterval
