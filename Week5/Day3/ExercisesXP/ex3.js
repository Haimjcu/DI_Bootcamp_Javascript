const compareToTen = (num) => {
   return new Promise((resolve, reject) => {
        num < 10 ? resolve("3") : reject("Boo!"); 
    })

.then(result => console.log(result))
.catch(error => console.log(error))
}

compareToTen(15);
compareToTen(8);
