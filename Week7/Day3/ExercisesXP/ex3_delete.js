const fs = require('fs');

fs.unlink('mytext2.txt', (err) => {
    err ? console.error(err)
    : console.log('deleter file');
});