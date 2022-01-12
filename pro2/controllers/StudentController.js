const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    var pageData = { pagename : "student", title : "Student"};
    res.render("layout", pageData);
})

routes.post("/save", (req, res)=>{
    console.log(req.body);
})

module.exports = routes;