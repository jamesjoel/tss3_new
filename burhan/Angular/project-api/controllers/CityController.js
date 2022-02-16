let express = require("express");
let routes = express.Router();
let sha1 = require("sha1");
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let database = require("../config/database");
let collName = "city";

routes.get("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            res.send(result);
        })
    })
})



module.exports = routes;