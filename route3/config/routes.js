const express = require("express");
const routes = express.Router();

// const HomeCtrl = require("../controllers/HomeController");


routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));

module.exports = routes;

