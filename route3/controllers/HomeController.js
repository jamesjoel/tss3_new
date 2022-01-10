const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    var pageData = { pagename : "home", title : "Home Page"};
    res.render("layout", pageData);
})

module.exports = routes;

