const exp = require('express');
const app = exp();

app.get('/', (req,res) => {
    res.send(`<h1>This is my first repsonse</h1>
    <h2>This is my second repsonse</h2>
    <p>This is my third repsonse</p>`);
});

app.get('/pic', (req,res) => {
    res.send('heeoo');
    app.use('/pic',exp.static('index.html'));
});

app.get('/form', (req,res) => {
    app.use('/',exp.static(__dirname+'/piv'));
});

app.get('/formData', (req,res) => {
    app.use('/',exp.static(__dirname+'/piv'));
});

app.get('/aboutMe/:hobby', (req,res) => {
    typeof req.params.hobby === 'string' ? res.send(`<h1>${req.params.hobby}</h1>`)
    : res.status(400).send('Bad request!');
});

app.listen(3000, ()=>{
    console.log(`I'm listening`);
});