const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const collName = "items";
const rand = require("random-string-gen");
const path = require("path");

routes.post("/", (req, res)=>{
   
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
   
        if(obj){
            var formdata = JSON.parse(req.body.formdata);
            var image = req.files.image;
            var name = image.name;
            var arr = name.split(".");
            var ext = arr[arr.length - 1];
            var newname = rand(20)+"."+ext;
            formdata.image = newname;
            
            var id = obj.id;
            formdata.resto_id = id;
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).insertOne(formdata, ()=>{
                    image.mv(path.resolve()+"/assets/item-images/"+newname, ()=>{
                        res.status(200).json({ success : true });
                    });
                })
            })
        }else{
            
            res.status(401).json({ success : false });
        }

    }else{
        res.status(401).json({ success : false });
    }
})
routes.delete("/:id", (req, res)=>{
    var id = req.params.id;
   
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
   
        if(obj){
            
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).deleteOne({ _id : mongodb.ObjectId(id)}, ()=>{
                    res.status(200).json({ success : true });
                })
            })
        }else{
            
            res.status(401).json({ success : false });
        }

    }else{
        res.status(401).json({ success : false });
    }
})
routes.put("/:id", (req, res)=>{
    // console.log(req.body);
    // return;
    delete req.body._id;
   if(req.headers.authorization){
    var token = JSON.parse(req.headers.authorization);
    var obj = jwt.decode(token, database.uniqueStr);
    if(obj){
        var objid = mongodb.ObjectId(req.params.id);
        MongoClient.connect(database.dbUrl, (err, con)=>{
            var db = con.db(database.dbName);
            db.collection(collName).updateMany({ _id : objid}, { $set : req.body }, ()=>{
                res.send({ success : true });
            })
        })
    }else{
        res.status(401).json({ success : false });

    }
   }else{
       res.status(401).json({ success : false });
   }
})
routes.get("/", (req, res)=>{
    if(req.headers.authorization){
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
        if(obj){
            var id = obj.id;
            MongoClient.connect(database.dbUrl, (err, con)=>{
                var db = con.db(database.dbName);
                db.collection(collName).find({ resto_id : id }).toArray((err, result)=>{
                    res.send(result);
                })
            })
        }else{
            
            res.status(401).json({ success : false });
        }

    }else{
        res.status(401).json({ success : false });
    }
})


routes.get("/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find({ _id : objid }).toArray((err, result)=>{
            res.send(result[0]);
        })
    })
})









routes.get("/all", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).find().toArray((err, result)=>{
            var allData = [];
            result.map((x, n)=>{
                var id = mongodb.ObjectId(x.resto_id);
                db.collection("resto").find({ _id : id }).toArray((err, result2)=>{
                    x.resto_name = result2[0].resto_name;
                    x.imagepath = database.apiUrl+"/item-images/"+x.image;
                    allData.push(x);
                    if(result.length == (n+1))
                    {
                        res.send(allData);
                        
                    }
                })
            })  
        })

    })
})




module.exports = routes;



