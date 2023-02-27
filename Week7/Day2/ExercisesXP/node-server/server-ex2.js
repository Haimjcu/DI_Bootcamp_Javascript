const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>${JSON.stringify(user)}</h1>`);
});

server.listen(8080, ()=>{
    console.log(`I'm listening`);
});