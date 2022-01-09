const express = require("express");
const app= express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.get("/", (req, res)=>{
    var pageData = { pagename : "home", title : "Home Page"};
    res.render("layout", pageData);
})
app.get("/about", (req, res)=>{
    var pageData = { pagename : "about", title : "About Page"};
    res.render("layout", pageData);
})

const port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})