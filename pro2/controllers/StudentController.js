const express = require("express");
const routes = express.Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


routes.get("/", (req, res)=>{
    var pageData = { pagename : "student", title : "Student"};
    res.render("layout", pageData);
})

routes.get("/view", (req, res)=>{

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").find().toArray((err, data)=>{
            var pageData = { pagename : "view_student", title : "Student", data : data };
            res.render("layout", pageData);
        });
    });



    
})


routes.post("/save", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        // use tss3
        var db = con.db("tss3");
        db.collection("student").insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.redirect("/student/view");
        });
        

    });
})

module.exports = routes;