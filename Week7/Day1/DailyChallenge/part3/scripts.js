const today = require('./main.js');

const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>The date and time are currently: ${today.toString()}</p>`);
});

server.listen(8080, ()=>{
    console.log(`I'm listening`);
});