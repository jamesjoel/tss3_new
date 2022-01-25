const express = require("express");
const routes = express.Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

routes.get("/", (req, res) => {
  MongoClient.connect("mongodb://localhost:27017", (err, con) => {
    if (err) {
      console.log(err);
      return;
    }
    var db = con.db("test4");
    db.collection("todo")
      .find()
      .toArray((err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        var pageData = {data : data}
        res.render("home", pageData);
      });
  });
});

routes.post("/save", (req, res) => {
  MongoClient.connect("mongodb://localhost:27017", (err, con) => {
    if (err) {
      console.log(err);
      return;
    }
    var db = con.db("test4");
    db.collection("todo").insertOne(req.body, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      res.redirect("/");
    });
  });
});

routes.get("/delete/:a", (req, res) => {
  var objid = mongodb.ObjectId(req.params.a);
  MongoClient.connect("mongodb://localhost:27017", (err, con) => {
    if (err) {
      console.log(err);
      return;
    }
    var db = con.db("test4");
    db.collection("todo").deleteMany({ _id: objid }, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      res.redirect("/");
    });
  });
});

module.exports = routes;
