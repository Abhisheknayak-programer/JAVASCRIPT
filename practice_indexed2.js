const express = require("express");
const path = require("path");
const fs = require("fs");
const port = 80;
const hostname ="127.0.0.1";
const app = express();

// #######################################################################################################


app.use(express.urlencoded());
app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));



// #######################################################################################################
// #######################################################################################################
// #######################################################################################################

app.get("/",(req,res)=>{
res.status(200).render("index.pug",{"title":"Music By Abhishek","content":"Fill the form Fast ","message":"to access our music"});
});

// #######################################################################################################
// #######################################################################################################
// #######################################################################################################

app.post("/",(req,res)=>{
    // console.log(req.body);
    name = req.body.name;
    email = req.body.email;
    number = req.body.number;
    gender = req.body.gender;
    more_about = req.body.more_about;
    
    let output = `The Name Of Our Client is ${name} , The Email-id of the client is ${email},The Mobile Number Of the Client is ${number} and his description is ${more_about}.`
    fs.writeFileSync("output_practice.txt",output);
    
    
    const sahil2 = {"message":"Your Form is successfully submited"};
    res.render("index.pug",sahil2);
});


// #######################################################################################################
// #######################################################################################################
// #######################################################################################################
app.listen(port,hostname,()=>{
    console.log(`The Port is Started At http://${hostname}:${port}/`);
});