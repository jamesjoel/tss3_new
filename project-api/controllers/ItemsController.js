const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const collName = "items";

routes.post("/", (req, res)=>{
   
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
   
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




routes.get("/all", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            // var newresult = Promise.all(result.map(async (x)=>{
            //     var id = mongodb.ObjectId(x.resto_id);
            //     db.collection("resto").find({ _id : id }).toArray((err, result2)=>{
            //         x.resto_name = result2[0].resto_name;
            //         console.log(x);
            //         return x;
            //     })
            // }));

            // console.log(result);
            res.send(result);
        })

    })
})




module.exports = routes;



