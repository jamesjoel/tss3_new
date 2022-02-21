let express = require("express");
let routes = express.Router();

routes.use("/api/signup", (require("../controllers/SignupController")));
routes.use("/api/city", (require("../controllers/CityController")));
routes.use("/api/resto/signup", (require("../controllers/RestoSignupController")));
routes.use("/api/user/auth", (require("../controllers/UserAuthController")));
routes.use("/api/rest/auth", (require("../controllers/RestoAuthController")));
routes.use("/api/user/profile", (require("../controllers/ProfileController")));
routes.use("/api/category", (require("../controllers/CategoryController")));
routes.use("/api/items", (require("../controllers/ItemsController")));





module.exports = routes;