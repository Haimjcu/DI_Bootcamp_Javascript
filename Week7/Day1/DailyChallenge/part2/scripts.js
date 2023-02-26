const largeNumber = require('../part1/main.js');
const b=5;


const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>My Module is ${largeNumber+5}</p><h1>Hi there at the frontend</h1>`);
});

server.listen(3000, ()=>{
    console.log(`I'm listening`);
});