const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const collName = "category";

routes.post("/", (req, res)=>{
    // console.log(req.body);
    // console.log(req.headers);
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
        // console.log(obj);
        // return;
        if(obj){
            var id = obj.id;
            req.body.resto_id = id;
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).insertOne(req.body, ()=>{
                    res.status(200).json({ success : true });
                })
            })
        }else{
            
            res.status(401).json({ success : false });
        }

    }else{
        res.status(401).json({ success : false });
    }
})

routes.delete("/:id", (req, res)=>{
    var id = mongodb.ObjectId(req.params.id);
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
        if(obj){
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).deleteMany({ _id : id }, ()=>{
                    res.status(200).json({ success : true });
                });
            })
        }else{
            
            res.status(401).json({ success : false });
        }

    }else{
        res.status(401).json({ success : false });
    }
})


routes.get("/", (req, res)=>{
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
        if(obj){
            var id = obj.id;
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).find({ resto_id : id }).toArray((err, result)=>{
                    res.send(result);
                })
            })
        }else{
            
            res.status(401).json({ success : false });
        }

    }else{
        res.status(401).json({ success : false });
    }
})





module.exports = routes;