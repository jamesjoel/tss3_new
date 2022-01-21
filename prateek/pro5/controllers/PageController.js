const express = require("express");
const { Collection } = require("mongo");
const routes = express.Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

routes.get("/", (req, res) => {
    var pageData = { pagename: "page", title: "Page" };
    res.render("layout", pageData);
})

routes.get("/view", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("record").find().toArray((err, data)=>{
            var pageData = { pagename : "view_record", title : "Record", data : data};
            res.render("layout", pageData);
        })
    })
})


routes.post("/save", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        var db = con.db("tss3");
        db.collection("record").insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.redirect("/page/view");
        })
    })
})



module.exports = routes;