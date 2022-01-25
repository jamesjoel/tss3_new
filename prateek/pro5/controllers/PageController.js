const express = require("express");
const { Collection } = require("mongo");
const routes = express.Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

routes.get("/", (req, res) => {
    var pageData = { pagename: "page", title: "Page" };
    res.render("layout", pageData);
})


routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("record").deleteMany({ _id : objid}, ()=>{
            res.redirect("/");
        })
    })
})


routes.post("/save", (req, res)=>{
    // console.log(req.body);
    // return;
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
            res.redirect("/");
        })
    })
})



module.exports = routes;