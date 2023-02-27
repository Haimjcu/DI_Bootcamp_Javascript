const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send(`<h1>This is my first repsonse</h1>
    <h2>This is my second repsonse</h2>
    <p>This is my third repsonse</p>`);
});

app.listen(3000, ()=>{
    console.log(`I'm listening`);
});