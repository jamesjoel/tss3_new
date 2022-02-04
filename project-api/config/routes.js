let express = require("express");
let routes = express.Router();

routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/city", (require("../controllers/CityController")));



module.exports = routes;