let express = require("express"); 
let routes = express.Router();

routes.use("/api/signup", (require("../controllers/SignupControllers")));
routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/resto/signup", (require("../controllers/RestoSignupController.js")));



module.exports = routes;