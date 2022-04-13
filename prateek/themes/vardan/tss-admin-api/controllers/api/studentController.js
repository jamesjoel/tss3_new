const express = require("express");
const { con } = require("../../config/database");
const routes = express.Router();
const database = require("../../config/database");

routes.get("/", (req, res)=>{
    database.con.connect(err=>{
        var db = con.db(database.dbName);
        db.collection("student").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})


module.exports = routes;