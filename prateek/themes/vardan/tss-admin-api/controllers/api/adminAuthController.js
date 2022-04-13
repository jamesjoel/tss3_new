const express = require("express");
const routes = express.Router();
const database = require("../../config/database");
const sha1 = require("sha1");

const { con } = require("../../config/database");
const jwt = require("jsonwebtoken");

routes.get("/", (req, res)=>{
    database.con.connect(err=>{
        var db = con.db(database.dbName);
        db.collection("admin").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;

    database.con.connect(err=>{
        var db = con.db(database.dbName);
        db.collection("admin").find({ username : u }).toArray((err, result)=>{
           
            if(result.length == 1){
                if(result[0].password == sha1(p))
                {
                   var token = jwt.sign({id : result[0]._id},database.uniqueStr);
                    res.status(200).json({success : true , token : token});
                }
                 else{
                     res.status(401).json({ success : false, type : 2});
                }
                
            
            }
            else{
                res.status(401).json({success : false , type : 1});
            }
        })
    })
})



module.exports = routes;