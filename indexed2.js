const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;
const hostname = "127.0.0.1";

// ###########################################################################################################


app.use(express.urlencoded());              /////it is used for the url-encoding .


app.set("view engine","pug");
app.set("views",path.join(__dirname,"views"));





// ######################################################################################################

app.get("/",(req,res)=>{
    const heading ={"title":"Abhishek Nayak Profile","content":"Sign Up" ,"message":"To Start Listening Our Music collection For Coders"};
    res.status(200).render("index.pug",heading);
});


app.post("/",(req,res)=>{
    // console.log(req.body)
    name = req.body.name;
    gender = req.body.gender;
    email = req.body.email;
    number = req.body.number;
    more_about = req.body.more_about;

    let output = `The Name Of Our Client is ${name} , The Email-id of the client is ${email},The Mobile Number Of the Client is ${number} and his description is ${more_about}.`
    fs.writeFileSync("output.txt",output);
    
    
    const sahil = {"message":"Your Form is Submitted Sucessfully"};
    res.render("index.pug",sahil);
});

// ####################################################################################################
app.listen(port,hostname,()=>{
    console.log(`SERVER IS RUNNING AT http://${hostname}:${port}/`)
});
