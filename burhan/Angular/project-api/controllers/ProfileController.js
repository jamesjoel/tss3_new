const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const mongoclient = mongodb.mongoclient;

routes.get("/", (req,res)=>{
    // console.log(req.headers);
    if(req.headers.authorization){
        var token =JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
        if(obj){

            var id = mongodb.ObjectId(obj.id);
            mongoclient.connect(database.dbUrl, (err, con)=>{
              var db = con.db(database.dbName);
              db.collection("user").find({ _id : id}).toArray((err, result)=>{
                res.send(result[0]);
              })
            });


        }
        else{
          res.status(401).json({ suceess : false, message : "This Url not found"});

        }

    }
    else
    {
      res.send({ suceess : false, message : "This Url not found"});
    }
})










module.exports =routes;