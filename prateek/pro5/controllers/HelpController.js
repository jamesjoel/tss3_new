const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    var pageData = { pagename : "help", title : "Help Page"};
    res.render("layout", pageData);
})


module.exports = routes;