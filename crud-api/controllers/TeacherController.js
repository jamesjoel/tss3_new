const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const database = require("../config/database");
const collName = "teacher";

routes.get("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            res.send(result);
        })

    })
})
routes.post("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName)
        db.collection(collName).insertOne(req.body, (err, result)=>{
            console.log(result);
            res.send({ success : true, result : result });
        })
    })
})
routes.put("/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).updateMany({ _id : objid }, { $set : req.body }, ()=>{
            res.send({ success : true });
        })
    })
})
routes.delete("/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName)
        db.collection(collName).deleteMany({ _id : objid}, ()=>{
            
            res.send({ success : true });
        })
    })
})

module.exports = routes;