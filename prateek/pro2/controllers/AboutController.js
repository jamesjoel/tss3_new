const express = require("express");
const routes = express.Router();

routes.get("/about", (req, res)=>{
    var pageData = { pagename : "about", title : "About Page"};
    res.render("layout", pageData);
})

module.exports = routes;