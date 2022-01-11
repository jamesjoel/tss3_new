var express = require("express");
var app = express();

app.use(express.static(__dirname+"/assets"));
/*
    1. app.use()   this method can call auto before when other routes call

    2. express.static  --- this method will used for static file like - css, jquery, bundle, image

*/


app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})



app.listen(3000, ()=>{
    // console.log(__dirname);
    console.log("server running");
})