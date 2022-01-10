const express = require("express");
const routes = express.Router();


routes.get("/", (req, res) => {
    var pageData = { pagename: "home", title: "Home" }
    res.render("layout", pageData);
})
routes.get("/online", (req, res) => {
    var pageData = { pagename: "home", title: "Help Online" }
    res.render("layout", pageData);
})
routes.get("/offline", (req, res) => {
    var pageData = { pagename: "home", title: "Help Offline" }
    res.render("layout", pageData);
})



module.exports = routes;