const express = require("express");
const routes = express.Router();

const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/Aboutcontroller");
const HelpCtrl = require("../controllers/HelpController");
const PageCtrl = require("../controllers/PageController");

routes.use("/", HomeCtrl);
routes.use("/about", AboutCtrl);
routes.use("/help", HelpCtrl);
routes.use("/page", PageCtrl);

module.exports = routes;