var p = new Promise((resolve, reject) => {
    reject(Error('Oops!'));
});

p.catch(error => console.log(error.message));
p.catch(error => console.log(error.message));