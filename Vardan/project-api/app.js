var express = require("express");
var app = express();
var cors = require("cors");
var routes = require("./config/routes");
var upload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(upload());
app.use(cors());

app.use(express.static(__dirname+"/assets"));
app.use(routes);

app.post ("/api/upload", (req,res)=>{
    // console.log(req.files);
    // return;
    var file = req.files.myfile;
    // console.log(file);
    // return;
    var name = file.name;
    file.mv(__dirname+"/assets/users/"+name,(err)=>{
        res.send({success : true});
    });
    
})





let port = process.env.port|| 3000;
app.listen(port, ()=>{
    console.log("server running",port);
})
