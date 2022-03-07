let express = require("express");
let app = express();
let cors = require("cors");
const { MongoClient } = require("mongodb");
let routes = require("./config/routes");
let upload = require("express-fileupload");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname+"/assets"));
app.use(cors());
app.use(routes);
app.use(upload());

app.get("/api/getimages", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("images").find().toArray((err, result)=>{
            // res.send(result);
            var newresult = result.map(x=>{
                x.imagepath = "http://localhost:3000/users/"+x.imagename;
                return x;
            })
            res.send(newresult);
        })
    })
})

app.post("/api/upload", (req, res)=>{
    // console.log(req.files);
    var file = req.files.myfile;
    // console.log(file);
    var name = file.name;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("images").insertOne({ imagename : name }, ()=>{
            file.mv(__dirname + "/assets/users/" + name, (err) => {
                res.send({ _id : "", imagename : name, imagepath: "http://localhost:3000/users/" + name });

            });
        })
    })
    
})


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("server running with port ", port);
})