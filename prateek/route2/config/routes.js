const express = require("express");
const routes = express.Router();

const HomeCtrl = require("../controllers/HomeController");
const AboutCtrl = require("../controllers/AboutController");
const Helpctrl = require("../controllers/HelpController");


routes.use("/", HomeCtrl);
routes.use("/about", AboutCtrl);
routes.use("/help", HelpCtrl)

module.exports = routes;