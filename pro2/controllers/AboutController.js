const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    var pageData = { pagename : "about", title : "About"};
    res.render("layout", pageData);
})
routes.get("/info", (req, res)=>{
    var pageData = { pagename : "info", title : "About Info"};
    res.render("layout", pageData);
})
routes.get("/more", (req, res)=>{
    var pageData = { pagename : "more", title : "About More"};
    res.render("layout", pageData);
})

module.exports = routes;
