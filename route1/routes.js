const express = require("express");
// const app = express();
const routes = express.Router();

const HomeController = require("./HelpController");
const AboutContrller = require("./AboutController");
const ContactController = require("./ContactController");
const HelpController = require("./HelpController");


routes.use("/", HomeController);
routes.use("/about", AboutContrller);
routes.use("/contact", ContactController)
routes.use("/help", HelpController)

module.exports = routes;
