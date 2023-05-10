let p = new Promise ((res,rej)=>{
    setTimeout(()=>{
        res(10);
    },4000);
})

let x = Promise.resolve(p);
x.then((res)=>{
    console.log(res);
}
);