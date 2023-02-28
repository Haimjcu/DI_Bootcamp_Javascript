const fs = require('fs');

fs.readFile('mytext.txt','utf-8', (err,data) => {
    err ? console.error(err)
    : console.log(data);
});