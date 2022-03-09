const express = require("express");
const routes = express.Router();
const database = require("../../config/database");


routes.post("/", (req, res)=>{
    var u = req.body.username;
    var p = req.body.password;

    database.con.connect(err=>{
        var db = con.db(database.dbName);
        db.collection("admin").find({ username : u }).toArray((err, result)=>{
            
        })
    })
})



module.exports = routes;