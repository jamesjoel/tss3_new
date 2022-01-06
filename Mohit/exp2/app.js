var express = require ("express");

var app = express();

app.use(express.static(__dirname+"/assets"));


app.get("/modal", (req, res)=>{
    res.sendFile(__dirname+"/modal.html");
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
});
app.get("/contact", (req, res)=>{
     res.sendFile(__dirname+"/contact.html");
});     
            
app.get("/help", (req, res)=>{
     res.sendFile(__dirname+"/help.html");
});

app.listen(3002, ()=>{
    console.log("server running");
});