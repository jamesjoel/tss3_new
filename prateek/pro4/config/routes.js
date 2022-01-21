const express = require("express");
const routes = express.Router();

const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/AboutController");
const HelpCtrl = require("../controllers/HelpController");
const StudentCtrl = require("../controllers/PageController");

routes.use("/", HomeCtrl);
routes.use("/about", AboutCtrl);
routes.use("/help", HelpCtrl);
routes.use("/student", StudentCtrl);


module.exports = routes;