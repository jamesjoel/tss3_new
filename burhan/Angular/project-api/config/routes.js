let express = require("express");
let routes = express.Router();

routes.use("./api//signup", (require("../controllers/signupcontroller")));



module.exports = routes;