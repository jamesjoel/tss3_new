var express = require ("express");
var routes = express.Router();


routes.post("/", (req,res)=>{
    console.log(req.body);
})



module.exports = routes;