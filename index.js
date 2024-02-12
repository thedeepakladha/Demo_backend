require('dotenv').config()

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello JI")
})


app.get('/about',(req,res)=>{
    res.send("Hello about ")
})

app.get('/twitter',(req,res)=>{
    res.send("Hello twitter")
})


app.get('/facebook',(req,res)=>{
    res.send("Hello facebook")
})


app.listen(process.env.PORT);