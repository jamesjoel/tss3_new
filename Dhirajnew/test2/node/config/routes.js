const express = require("express");
const routes = express.Router();

routes.use("/api/user", require("../controller/ApiController"));

module.exports = routes;