let express = require("express");
let app = express();
let cors = require("cors");
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.get("/api/teacher", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("teacher").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

app.post("/api/teacher", (req, res)=>{
    var data = req.body;

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("teacher").insertOne(data, ()=>{
            res.send({ success : true });
        })
    })
})

app.get("/api/employee", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("employee").find().toArray((err, result)=>{
            res.send(result);
        })
    })
})

app.post("/api/employee", (req, res)=>{
    console.log(req.body);
    // return;
    var data = req.body;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("employee").insertOne(data, ()=>{
            res.send({ success : true });
        })
    })
})





app.listen(3000, ()=>{
    console.log("server running");
})