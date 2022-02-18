var express = require("express");
var app = express();
var cors = require("cors");
var routes = require("./config/routes");


app.use(express.json);
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(routes);




let port = process.env.port|| 3000;
app.listen(port, ()=>{
    console.log("server running",port);
})
