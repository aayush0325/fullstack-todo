const express = require('express');
const jwt = require('jwt');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const key = '123456';
app.use(express.json());

/*
    POST - /todo

    body = {
        title:string,
        desc: String,
    }

*/

app.post('/todo',(req,res) => {

})

app.listen(port,() => {
    console.log(`listening to port ${port}`);
})

