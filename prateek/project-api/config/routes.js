let express = require("express");
let routes = express.Router();

routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/user/auth", (require("../controllers/userAuthController")));




module.exports = routes;