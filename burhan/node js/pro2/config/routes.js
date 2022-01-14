const express = require("express");
const routes = express.Router();

const HomeCtrl = require("../controllers/HomeController");
const StudentCtrl = require("../controllers/StudentController");

routes.use("/", HomeCtrl);
routes.use("/student", StudentCtrl);


module.exports = routes;