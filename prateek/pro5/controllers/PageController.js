const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    var pageData = { pagename : "page", title : "Page"};
    res.render("layout", pageData);
})