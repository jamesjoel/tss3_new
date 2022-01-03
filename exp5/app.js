var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    var a = "Dheeraj";

    //res.sendFile(__dirname+"/index.html");

    var obj = { name : a, age : 25 };
    res.render("home", obj);
})

app.get("/about", (req, res)=>{
    var obj = { c1 : "indore", c2 : "mumbai", c3 : "pune" }
    res.render("about", obj);
})

app.get("/student", (req, res)=>{
    var data = [
        {
            name : "rohit",
            age : 25,
            city : "mumbai"
        },
        {
            name : "amar",
            age : 22,
            city : "pune"
        },
        {
            name : "priya",
            age : 20,
            city : "bhopal"
        }
    ];

    var obj = { stu : data };
    res.render("student", obj);
})


app.listen(3000, ()=>{
    console.log("server running");
})
/*
    res.send() -------------- Data Send
    res.sendFile() ---------- Send HTML File
    res.render() ------------ Send EJS with data

*/