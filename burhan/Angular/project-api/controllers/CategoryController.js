const express = require("express");
const routes = express.routes;
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const mongoClient = mongodb.mongoClient;
const collName = "category";

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



Module.exports = routes;