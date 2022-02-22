const express = require("express");
const routes = express.Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const database =require("../config/database");
const sha1 = require("sha1");
const collName = "resto";
const jwt = require("jsonwebtoken");


routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;
    MongoClient.connect(database.dburl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({username : u }).toArray((err, result)=>{
            if(result.length == 1)
            {
                if(result[0].password == sha1(p))
                {
                  var token = jwt.sign({ id : result[0]._id }, database.uniquestr );
                  res.status(200).json({ successe : true, token : token });
                }
                else{
                     res.status(401).json({ successe : false, type : 2 });
                }
            }
            else{
                res.status(401).json({ successe : false, type : 1 });
            }
        })
    })
})

module.exports = routes;