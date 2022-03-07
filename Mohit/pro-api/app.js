let express = require("express");
let app = express();
let cors = require("cors");
let routes = require("./config/routes");


app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors());


app.use(routes);

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running with port", port);
})