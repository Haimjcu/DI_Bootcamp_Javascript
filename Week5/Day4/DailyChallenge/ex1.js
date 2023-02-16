const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1,promise2,promise3]).then((values) => {
    console.log(values);
})

//  it needs all the promises to be resolved,  then it console logs the resolve values from each
// promise in an array.  With each element of the array being the resolve value from each
// promise.