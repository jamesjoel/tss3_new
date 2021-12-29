// require or call the express module
var express = require("express");
const { send } = require("express/lib/response");
// calling the express sample constractoer
var app = express();
app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h1>About page</h1>");
});
app.get("/contact", ()=>{
    res.send("<h1>Contact Page</h1>");
});
app.get("/help", ()=>{
    res.send("<h1>Help page</h1>");
});

app.listen(7860,()=>{
    console.log("server running");
});