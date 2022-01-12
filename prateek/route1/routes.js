const express = require("express");

const routes = express.Router();

const HomeController = require("./HomeController");
const AboutController = require("./AboutController");
const ContactController = require("./ContactController");
const HelpController = require("./HelpController");

routes.use("/", HomeController);
routes.use("/about", AboutController);
routes.use("/contact", ContactController);
routes.use("/help", HelpController);

module.exports = routes;