let express = require("express");
let routes = express.Router();

routes.use("./api//signup", (require("../controllers/signupcontroller")));
routes.use("./api//city", (require("../controllers/citycontroller")));



module.exports = routes;