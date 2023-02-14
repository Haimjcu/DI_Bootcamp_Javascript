const compareToTen = (num) => {
   return new Promise((resolve, reject) => {
        setTimeout (() => {resolve("success"); }, 4000);
    })

.then(result => console.log(result))
.catch(error => console.log(error))
}

compareToTen(15);

