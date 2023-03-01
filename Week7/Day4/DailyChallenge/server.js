const express = require('express');
const app = express();
app.use('/',express.static(__dirname));
app.use(express.urlencoded({extended:false}));
app.use(express.json())

let users = [];
const success ='Hello, Your account is created!';
const failure ='Username already exists';


app.listen(3000, ()=>{
    console.log(`I'm listening`);
});

app.post('/register',(req,res)=>{
  users.indexOf(req.body.username) === -1 ? 
  ( users.push(req.body.username) , res.json(success))
  : res.json(failure);
 })

 app.post('/login',(req,res)=>{
  const notRegistered = 'Username is not registerd';
  let welcome = `Hi, ${req.body.username} welcome back again`;
  users.indexOf(req.body.username) === -1 ? 
  ( users.push(req.body.username) , res.json(notRegistered))
  : res.json(welcome);
 })

 app.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/login.html')
 })


 