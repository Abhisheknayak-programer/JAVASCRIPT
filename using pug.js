const path = require("path");
const express = require("express");
const port = 80;
const hostname = "127.0.0.1";
const sahil = express();
// sahil.use("/file",express.static('index2.js'));


sahil.set("view engine","pug");
sahil.set("views",path.join(__dirname,"views"));

// ********************************************************************************************

sahil.get("/demo",(req,res)=>{
    res.status(200).render('demo2.pug',{title:"Abhishek Nayak",message :"my profile is i am a professional programer"})
});

sahil.get("/", (req, res) => {
    res.send("<h1>THIS IS A HOME PAGE</h1>");
});



sahil.listen(port, hostname, () => {
    console.log(`YOUR PAGE IS AT http://${hostname}:${port}/`);
});