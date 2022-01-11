const express = require("express");
const routes = require("./routes");
const app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));

app.use(routes);



app.listen(3000, ()=>{
    console.log("server running");
})