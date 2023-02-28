const fs = require('fs');

fs.writeFile('mytext3.txt','bla bla bla', (err) => {
    err ? console.error(err)
    : console.log('write operation complete');
});

fs.appendFile('mytext3.txt','new new new', (err) => {
    err ? console.error(err)
    : console.log('append operation complete');
});

fs.readFile('mytext3.txt','utf-8', (err,data) => {
    err ? console.error(err)
    : console.log(data);
});