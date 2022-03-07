var express = require("express");
var express = require ("express");
var routes = express.Router();

var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var database = require ("../config/database"); 
var sha1 = require("sha1");
var jwt = require("jsonwebtoken");
var collName = "signup"; 

routes.post("/" , (req , res)=>{
   

    var u =req.body.username;
    var p = req.body.password;
   
    MongoClient.connect(database.dbUrl, (err,con)=>{
        var db = con.db ( database.dbName)
        db.collection(collName).find({email : u}).toArray((err,result)=>{
           
             if (result.length == 1)
             {
            if(result[0].password == sha1(p))
            {
                var token = jwt.sign({id : result[0]._id},database.uniqueStr);
                
               res.status(200).json({ success : true , token : token });
            }
            else{
                res.status(402).json({success :false, type : 2});
            }
        }
        else{
            res.status(401).json({ success : false, type :1});
        }
        })
    })     
    })


module.exports= routes;