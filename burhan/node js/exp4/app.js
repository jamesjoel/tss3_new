var express = require("express");
var app = express();


app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    
})



app.listen(3000, ()=>{
    console.log("server running");
})