const express = require("express");
const routes = express.Router();
const info = require("../config/info");

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;


routes.post("/",(req, res)=>{
    MongoClient.connect( info.dbLink,(err, con)=>{
        if(err){
            console.log(err);
            console.log("..........");
            return;
        }
        var db = con.db(info.dbName);
        db.collection("user").insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                console.log("--------");
                return;
            }
            res.send({success : true});
        });
    });
});

module.exports = routes;