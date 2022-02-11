let express = require("express");
let routes = express.Router();

routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/resto/signup", (require("../controllers/RestoSignupController")));
routes.use("/api/user/auth", (require("../controllers/UserAuthController")));
routes.use("/api/resto/auth", (require("../controllers/RestoAuthController")));



module.exports = routes;