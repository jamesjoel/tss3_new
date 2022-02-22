const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


routes.get("/", (req, res)=>{
   // console.log(req.headers);
   if(req.headers.authorization){
      var token = JSON.parse(req.headers.authorization);
      var obj = jwt.decode(token, database.uniquestr);
       if(obj){
       // console.log(obj);
        var id = mongodb.ObjectId(obj.id); 
        MongoClient.connect(database.dburl, (err, con)=>{
         var db = con.db(database.dbName);
         db.collection("user").find({ _id : id }).toArray((err, result)=>{
             res.send(result[0]);
         })   
        }) 

       }else{
        res.status(401).json({ success : false, message : "This URL not found"}); 
       }


   }else{
       res.send({ success : false, message : "This URL not found"});
   }
})




module.exports = routes;