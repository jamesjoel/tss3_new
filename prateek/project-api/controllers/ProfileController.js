const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");
const database = require("../config/database");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


routes.get("/", (req, res) => {
    // console.log(req.headers);
    if (req.headers.authorization) {
        var token = JSON.parse(req.headers.authorization);
        var obj = jwt.decode(token, database.uniqueStr);
        if (obj) {
            // console.log(obj);
            var id = mongodb.ObjectId(obj.id);
            MongoClient.connect(database.dbUrl, (err, con) => {
                var db = con.db(database.dbName);
                db.collection("user").find({ _id: id }).toArray((err, result) => {
                    // console.log(result);
                    // return
                    user = {
                        dataa: data,
                        imagepath: "http://localhost:3000/profile/" + result[0].pic
                    }

                    res.send(user);
                })
            })

        } else {
            res.status(401).json({ success: false, message: "This URL not Found" });
        }



    } else {
        res.send({ success: false, message: "This URL not Found" });
    }
})




module.exports = routes;