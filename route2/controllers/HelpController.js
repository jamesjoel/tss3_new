const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    var pageData = { pagename : "help", title : "Help"};
    res.render("layout", pageData);
})
routes.get("/online", (req, res)=>{
    var pageData = { pagename : "online", title : "Online Help"};
    res.render("layout", pageData);
})
routes.get("/offline", (req, res)=>{
    var pageData = { pagename : "offline", title : "Offline Help"};
    res.render("layout", pageData);
})

module.exports = routes;
