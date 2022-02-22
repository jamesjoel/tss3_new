let express = require("express");
let routes = express.Router();
let sha1 = require("sha1");
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let database = require("../config/database");
let collName ="user";
let jwt = require("jsonwebtoken");

routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;
    MongoClient.connect(database.dburl, (err, con)=>{
        var db = con.db(database.dbName);
      
        db.collection(collName).find({ email : u }).toArray((err, result)=>{
            if(result.length == 1)
            {
                if(result[0].password ==sha1(p))
                {
                    var token = jwt.sign({ id : result[0]._id }, database.uniqueStr);
                    res.status(200).json({ succes : true, token : token})
                }
                else{
                    res.status(401).json({ succes : false, type : 2 });
                }
            }
            else{
                res.status(401).json({ succes : false, type : 1 });
            }
        })
    })
})


module.exports = routes;