let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
    setTimeout(() => {
      console.log('This will run after the promise');
    }, 0);
  }, 0);
});
p.then(
  (data) => {
    console.log(data);
  },
  (data) => {
    console.log(data);
  }
);
