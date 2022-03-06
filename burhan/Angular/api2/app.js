let express = require("express");
let app = express();
let cors = require("cors");
let mongodb = require("mongodb");
let mongoClient = mongodb.mongoClient;
let upload = require("express-fileupload");

app.use(express.static(__dirname+"/assets"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(upload());

app.get("/api/getimages", (req, res)=>{
    mongoClient.connect("mongodb://localhost:27017",(err, con)=>{
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
    var file = req.files.myfile;
    var name = file.name;
    mongoClient.connect("mongodb://localhost:27017",(err, con)=>{
        var db = con.db("tss3");
        db.collection("images").insertOne({ imagename : name }, ()=>{
            file.mv(__dirname+"/assets/users/"+name, (err)=>{
                req.send({ _id : "", imagename : name, imagepath : "http://localhost:3000/users/"+name});
        });

        
    })
    
        
    })
})







app.get("./api/teacher",(req, res)=>{
    MongoClient.connect("mongodb://localhost:27017",(err, con)=>{
    var db = con.db("tss3");
    db.collection("teacher").find().toArray((err, result)=>{
        res.send(result);
    })    
})
   
})
app.post("./api/teacher",(req, res)=>{
    var  data = req.body;

    MongoClient.connect("mongodb://localhost:27017",(err, con)=>{
    var db = con.db("tss3");
    db.collection("teacher").insertOne(data,()=>{
        res.send({success : true});
   
    })    
})
}) 
   







app.listen(3000,()=>{
    console.log("server running");
})