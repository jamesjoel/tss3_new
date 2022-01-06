const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));


app.get("/", (req, res)=>{
    res.render("home");
})
app.get("/about", (req, res)=>{
    res.render("about");
})


const port = 3000;
app.listen(port, ()=>{
    console.log("serve running");
})