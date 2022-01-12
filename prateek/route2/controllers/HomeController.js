const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    var pageData = { pagename : "home", title : "Home"}
    res.render("layout", pageData);
})



module.exports = routes;