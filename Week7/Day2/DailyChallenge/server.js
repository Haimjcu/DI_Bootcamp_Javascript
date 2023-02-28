const exp = require('express');
const app = exp();
app.use('/',exp.static(__dirname+'/public'));

app.get('/', (req,res) => {
    res.send(`<h1>This is my first repsonse</h1>
    <h2>This is my second repsonse</h2>
    <p>This is my third repsonse</p>`);
});

app.get('/pic', (req,res) => {
    res.sendFile(__dirname+'/pic.html');
});

app.get('/form', (req,res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/formData', (req,res) => {
    res.send(`<p>${req.query.email} sent you a message ${req.query.message}</p>`);
});

app.get('/aboutMe/:hobby', (req,res) => {
    typeof req.params.hobby === 'string' ? res.send(`<h1>${req.params.hobby}</h1>`)
    : res.status(400).send('Bad request!');
});

app.listen(3000, ()=>{
    console.log(`I'm listening`);
});