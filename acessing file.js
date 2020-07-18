const express = require('express');
const app = express();
const hostname ="127.0.0.1";
const port = 80;
const path = require('path');


app.use("/file",express.static('index2.js'));    //////  TO ACESS THE FILE


app.get("/",(req,res)=>{
    res.send("this is the home page");
});

app.get("/about",(req,res)=>{
    res.status(200).send("this is the about page");
});


app.listen(port,()=>{
    console.log(`your port  is running at http://${hostname}:${port}`);
});