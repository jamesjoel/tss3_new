let express = require("express");
let routes = express.Router();
let sha1 = require("sha1");
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let database = require("../config/database");
let collName = "user";

routes.post("/", (req, res)=>{
    console.log(req.body);
    // return;
    delete req.body.re_password;
    req.body.password = sha1(req.body.password);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(req.body, (err)=>{
            res.send({ success : true });
        })
    })
})




module.exports = routes;