const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('hello, get your request');
    req.url === '/' ? res.end('<h1>Home Page </h1>')
    : req.url === '/abc' ? res.end ('the abc page')
    : res.end('you got it');
});

server.listen(5001, ()=>{
    console.log('run on port 5001');
});
