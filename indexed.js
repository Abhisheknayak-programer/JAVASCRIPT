const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const hostname = "127.0.0.1";

app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));


app.get("/",(req,res)=>{
    const heading ={"title":"Abhishek Nayak Profile","content":"Sign Up" ,"message":"To Start Listening Our Music collection For Coders"};
    res.status(200).render("index.pug",heading);
});


app.listen(port,hostname,()=>{
    console.log(`SERVER IS RUNNING AT http://${hostname}:${port}/`)
});
