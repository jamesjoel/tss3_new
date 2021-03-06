let express = require("express"); 
let routes = express.Router();

routes.use("/api/signup", (require("../controllers/SignupControllers")));

routes.use("/api/resto/signup", (require("../controllers/RestoSignupController")));
routes.use("/api/user/auth", (require("../controllers/UserAuthController")));
routes.use("/api/resto/auth", (require("../controllers/RestoAuthController")));
routes.use("/api/user/profile", (require("../controllers/ProfileController")));


module.exports = routes;