const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes/routes.js');

dotenv.config()

// console.log(products);
const app = express();
app.use(cors());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',express.static(__dirname+'/public'));

app.listen(process.env.PORT, ()=>{
  console.log(`run on port ${process.env.PORT}`);
})

app.use('/', routes);
