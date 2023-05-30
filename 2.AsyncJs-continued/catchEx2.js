Promise.resolve('A')
.then(()=>{
    throw Error ('omg');
})
.catch((err)=>{
    return 'works';
})
.then((val)=>{
    throw Error ('notworks');
})
.catch((err)=>{
    console.log(err.message);
})

// // // omg