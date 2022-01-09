var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
var a = "MOHAMMED";

})
var obj = {name : a, age : 25};
res.render("home", obj);

app.get("/about", (req, res)=>{
    var obj = {c1 : Ujjan, c2 : Surat, c3 : Ahmedabad};
    res.render("about", obj);
})

app.get("/student", (req, res)=>{
    var data = [
        {
            name : "rahul",
            age : "23",
            city : "Ujjain"
        },
        {
            name : "aman",
            age : "24",
            city : "SURAT"
        },
        {
            name : "sachin",
            age : "22",
            city : "Ahmedabad"
        },
    ];
    var obj = { stu : data};
    res.render("student", obj);

app.listen(7860, ()=>{
    console.log("server running")
})
/*
    res.send() -------------- Data Send
    res.sendFile() ---------- Send HTML File
    res.render() ------------ Send EJS with data

*/
