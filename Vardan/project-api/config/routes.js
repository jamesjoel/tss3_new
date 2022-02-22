var express = require("express");
var routes = express.Router();

routes.use("/api/signup",( require("../controllers/SignupController")));







module.exports = routes;

