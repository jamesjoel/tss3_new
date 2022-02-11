var express = require("express");
var app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/about", (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    console.log(req.headers);
})

app.listen(3000, ()=>{
    console.log("server running");
    console.log("welcome");
});



