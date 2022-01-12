const express = require("express");
const routes = express.Router();


routes.get("/", (req, res) => {
    var pageData = { pagename: "home", title: "Home" }
    res.render("layout", pageData);
})
routes.get("/info", (req, res) => {
    var pageData = { pagename: "home", title: "About info" }
    res.render("layout", pageData);
})
routes.get("/more", (req, res) => {
    var pageData = { pagename: "home", title: "About more" }
    res.render("layout", pageData);
})



module.exports = routes;