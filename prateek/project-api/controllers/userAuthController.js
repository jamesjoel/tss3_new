let express = require("express");
let routes = express.Router();

let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let database = require("../config/database");
let collName = 

routes.post("/", (req, res)=>{
    // console.log(req.body);
    var u =req.body.username;
    var p =req.body.password;

    

})

module.exports = routes;