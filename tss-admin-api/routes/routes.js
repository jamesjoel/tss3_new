const express = require("express");
const routes = express.Router();

routes.use("/api/admin/auth", require("../controllers/api/adminAuthController"));
routes.use("/api/admin/student", require("../controllers/api/studentController"));



module.exports = routes;