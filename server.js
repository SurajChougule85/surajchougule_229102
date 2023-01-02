const express=require("express");
const bodyparser = require("body-parser")
const app=express();

app.use(bodyparser.urlencoded({extends:false}));
app.get('/course',(req,res)=>{
    res.sendFile("./index.html",{root:__dirname});
})
app.get('/schedule',(req,res)=>{
    res.sendFile("./index2.html",{root:__dirname});
})
app.listen(3000,()=>{
    console.log("our server is working on http://localhost:3000")
})