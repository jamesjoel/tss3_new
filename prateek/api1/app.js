let express = require("express");
let app = express();
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

let cors = require("cors");


app.use(cors());


app.get("/api/student", (req, res) => {
    MongoClient.connect("mongodb://localhost:27017", (err, con) => {
        var db = con.db("tss3");
        db.collection("student").find().toArray((err, result) => {
            res.send(result);
        })
    })
})


app.listen(3000, () => {
    console.log("server running");
})