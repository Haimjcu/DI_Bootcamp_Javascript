const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>This is my first repsonse</h1>
    <h2>This is my second repsonse</h2>
    <p>This is my third repsonse</p>`);
});

server.listen(3000, ()=>{
    console.log(`I'm listening`);
});