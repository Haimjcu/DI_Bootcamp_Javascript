const express = require('express');
const app = express();
const fs = require('fs');


let dataArr = [];

app.use(express.urlencoded({extended: false}));

app.use('/', express.static(__dirname));

app.listen(3000, () => {
    console.log('listening on port 3000')
})

app.post('/submit', (req,res) => {
   const item = {
    "item":req.body.item,
    "amount": req.body.amount
   }
    dataArr.push(item);
    console.log(dataArr);
})

app.get('/api', (req,res) => {
    fs.readFile('shoppingList.txt','utf-8', (err,data) => {
        if(err)
            console.log(err);
        else
            res.status(200).json(dataArr);
    });
})