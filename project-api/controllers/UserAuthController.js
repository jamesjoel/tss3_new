let express = require("express");
let routes = express.Router();

let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let database = require("../config/database");
let collName ="user";
let sha1 = require("sha1");

routes.post("/", (req, res)=>{
    var u = req.body.username; // amar
    var p = req.body.password; // 123
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({ email : u }).toArray((err, result)=>{
            if(result.length == 1) // username/email is correct
            {
                if(result[0].password == sha1(p))
                {
                    res.status(200).json({ success : true });
                }
                else{
                    res.status(401).json({ success : false, type : 2 });
                }
            }
            else{
                res.status(401).json({ success : false, type : 1 });
                
            }
        })
    })




})

module.exports = routes;