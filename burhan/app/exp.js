var express = require("express");
var app = express();

app.get("/", (req, res)=>{
res.sendFile(__dirname+"/home.html");
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
});
app.get("/login", (req, res)=>{
    res.sendFile(__dirname+"/help.html");
});



app.listen(7860, ()=>{
    console.log("server running");
})

