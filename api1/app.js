let express = require("express");
let app = express();
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let upload = require("express-fileupload");

let cors = require("cors");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname+"/assets"));
app.use(cors());
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
        db.collection("images").insertOne({ imagename : name  }, ()=>{
            file.mv(__dirname+"/assets/users/"+name, (err)=>{
                res.send({ _id : "", imagename : name, imagepath : "http://localhost:3000/users/"+name });
            });
        })
    })
    
})





app.get("/api/student", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})


app.listen(3000, ()=>{
    console.log("server running");
})