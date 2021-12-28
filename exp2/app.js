// require or call the express module

var express = require("express");
// calling the express module constructor
var app = express();

// localhost:3000
app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
})

// localhost:3000/about

app.get("/about", (req, res)=>{
    res.send("<h1>About Page<h1>");
});
// localhost:3000/contact

app.get("/contact", (req, res)=>{
    res.send("<h1>contact Page<h1>");
   
    
})

app.get("/help", (req, res)=>{
   res.send("<h1>help page</h1>")
})


// create our virtual server with 3000 port
app.listen(3000, ()=>{ 
    console.log("server running");
});