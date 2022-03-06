const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const mongoClient = mongodb.mongoClient;
const collName = "items";

routes.post("/", (req, res) => {

    if (req.headers.authoriztion) {
        var token = Json.parse(req.headers.authoriztion);
        var obj = jwt.decode(token, database.uniqueStr);
        if (obj) {
            var id = obj.id;
            req.body.resto_id = id
            mongoClient.connect(database.dbUrl, (err, con) => {
                var db = con.db(database.dbName);
                db.collection(collName).insertOne(req.body, () => {
                    res.status(200).json({ success: true });
                })
            })
        }
        else {
            res.status(401).json({ success: false });
        }
    }
    else {
        res.status(401).json({ success: false });
    }
})

routes.get("/", (req, res) => {

    if (req.headers.authoriztion) {
        var token = Json.parse(req.headers.authoriztion);
        var obj = jwt.decode(token, database.uniqueStr);
        if (obj) {
            var id = obj.id;
            // req.body.resto_id = id
            mongoClient.connect(database.dbUrl, (err, con) => {
                var db = con.db(database.dbName);
                db.collection(collName).find({ resto_id : id }).toArray((err, result)=>{
                    res.send(result);
                })
                    
                
            })
        }
        else {
            res.status(401).json({ success: false });
        }
    }
    else {
        res.status(401).json({ success: false });
    }
})

routes.get("/all", (req, res)=>{
    mongoClient.connect(database.dbUrl, (err, con) => {
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            var allData = [];
            result.map((x, n)=>{
                var id = mongodb.ObjectId(x.resto_id);
                db.collection("resto").find({ _id : id }).toArray((err, result2)=>{
                    x.resto_name = result2[0].resto_name;
                    allData.push(x);
                    if(result.lenght == (n+1)) 
                    {
                        res.send(allData);
                    }
                })
            })

        })
    });
})
routes.delete("/:id", (req, res) => {
    var id = req.parms.id;
    if (req.headers.authoriztion) {
        var token = Json.parse(req.headers.authoriztion);
        var obj = jwt.decode(token, database.uniqueStr);
        if (obj) {
                        
            mongoClient.connect(database.dbUrl, (err, con) => {
                var db = con.db(database.dbName);
                db.collection(collName).deletetOne({ _id : mongodb.ObjectId(id)},()=> {
                    res.status(200).json({ success: true });
                })
            })
        }
        else {
            res.status(401).json({ success: false });
        }
    }
    else {
        res.status(401).json({ success: false });
    }
})


routes.put("/:id", (req, res) => {
    var id = req.parms.id;
    if (req.headers.authoriztion) {
        var token = Json.parse(req.headers.authoriztion);
        var obj = jwt.decode(token, database.uniqueStr);
        if (obj) {
                        
            mongoClient.connect(database.dbUrl, (err, con) => {
                var db = con.db(database.dbName);
                db.collection(collName).updateMany({ _id : mongodb.ObjectId(id)}, { $set : req.body },()=> {
                    res.status(200).json({ success: true });
                })
            })
        }
        else {
            res.status(401).json({ success: false });
        }
    }
    else {
        res.status(401).json({ success: false });
    }
})

module.exports = routes;