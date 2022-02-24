var express = require ("express");
var routes = express.Router();
var sha1 =require ("sha1");
var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require ("../config/database"); 
var collName = "signup";
//data base tss3            collection name signup //


routes.post("/", (req,res)=>{
    delete req.body.re_password;
    req.body.password = sha1( req.body.password);
    MongoClient.connect(database.dbUrl,(err , con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(req.body,(err)=>{
        
            res.send({succes : true });
        })
    })

})



module.exports = routes;