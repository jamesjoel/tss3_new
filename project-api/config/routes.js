let express = require("express");
let routes = express.Router();

routes.use("/api/signup", (require("../controllers/SignupController")));



module.exports = routes;