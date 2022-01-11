var express = require("express");
var app = express();



app.use((req, res, abc)=>{
    console.log("---------------------");
    abc();
})


app.get("/", (req, res)=>{
    
    res.sendFile(__dirname+"/home.html");
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



app.listen(3000, ()=>{
    console.log("server running");
})