const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./config/routes");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);


app.listen(port, ()=>{
    console.log("Server Running");
})