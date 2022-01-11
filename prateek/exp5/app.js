const { name } = require("ejs");
var express = require("express");
// const { engine } = require("express/lib/application");
var app = express();

app.set("view engine", "ejs");


app.get("/", (req, res)=>{
   var a = "dheeraj";
    // res.sendFile(__dirname+"/index.html")

    var obj = { name : a, age : 25};
    res.render("home", obj);
})

app.get("/about", (req, res)=>{

    var obj = { c1 : "Indore", c2 : "Mumbai", c3 : "Pune"}
    res.render("about", obj);
});

app.get("/student", (req, res)=>{
    var data = [
        {
            name : "rohit",
            age : 25,
            city : "mumbai"
        },
        {
            name : "aman",
            age : 27,
            city : "pune"
        },
        {
            name : "raj",
            age : 23,
            city : "indore"
        }
    ];

    var obj = { stu : data };
    res.render("student", obj);
});



app.listen(3000, ()=>{
   console.log("server running");
});