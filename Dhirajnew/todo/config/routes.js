const express = require("express");
const routes = express.Router();

routes.use("/", require("../controller/HomeController"));

module.exports = routes;