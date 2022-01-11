const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    var pageData = { pagename : "about", title : "About Page"};
    res.render("layout", pageData);
})

routes.post("/save", (req, res)=>{
    console.log(req.body);
});

module.exports = routes;

