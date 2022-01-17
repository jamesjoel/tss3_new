const express = require("express");
const routes = express.Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const PDFDocument = require('pdfkit');
const fs = require('fs');
const download = require("download");
const path = require("path");
const blobStream = require("blob-stream");

routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("city").find().toArray((err, data)=>{
            
            var pageData = { pagename : "student", title : "Student", data : data};
            res.render("layout", pageData);
        })
    })
})

routes.get("/view", (req, res)=>{

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").find().toArray((err, data)=>{
            var pageData = { pagename : "view_student", title : "Student", data : data };
            res.render("layout", pageData);
        });
    });



    
})

routes.get("/profile/:a", (req, res)=>{
    // console.log(req.params.a);
    // return;
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").find({ _id : objid }).toArray((err, data)=>{
            // console.log(data[0]);
            var pageData = { pagename : "profile", title : "Profile", data : data[0]};
            res.render("layout", pageData);
        })
    })
})

routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").deleteMany({ _id : objid}, ()=>{
            res.redirect("/student/view");
        })
    })
})




routes.post("/save", (req, res)=>{
    // console.log(req.body);
    // return;
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        // use tss3
        var db = con.db("tss3");
        db.collection("student").insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            res.redirect("/student/view");
        });
        

    });
})

routes.get("/edit/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").find({ _id : objid }).toArray((err, data1)=>{

            db.collection("city").find().toArray((err, data2)=>{

                var pageData = { pagename : "edit", title : "Edit", data : data1[0], city : data2};
                res.render("layout", pageData);
            })


        })
    })

})



routes.post("/update/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").updateMany({ _id : objid }, { $set : req.body }, ()=>{
            res.redirect("/student/view");
        })
    })
})


routes.get("/pdfcreate/:a", (req, res)=>{

    var objid = mongodb.ObjectId(req.params.a);
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("student").find({ _id : objid }).toArray((err, data)=>{
            var doc = new PDFDocument();
            const stream = doc.pipe(blobStream());
            doc.pipe(fs.createWriteStream(req.params.a+'.pdf'));
            doc.fontSize(25).text('Student Detail', 100, 80);
            doc.save()
            doc.text('', 100, 120).font('Times-Roman', 20).moveDown().text("Name", { width: 412, align: 'justify', columns: 2, height: 300 });
            doc.text('', 200, 120).font('Times-Roman', 20).moveDown().text("Age", { width: 412, align: 'justify', columns: 2, height: 300 });
            doc.text('', 300, 120).font('Times-Roman', 20).moveDown().text("City", { width: 412, align: 'justify', columns: 2, height: 300 });
            
            doc.text('', 100, 150).font('Times-Roman', 20).moveDown().text(data[0].name, { width: 412, align: 'justify', columns: 2, height: 300 });
            doc.text('', 200, 150).font('Times-Roman', 20).moveDown().text(data[0].age, { width: 412, align: 'justify', columns: 2, height: 300 });
            doc.text('', 300, 150).font('Times-Roman', 20).moveDown().text(data[0].city, { width: 412, align: 'justify', columns: 2, height: 300 });
            
            doc.end();
            stream.on("finish", ()=>{
                var filename = "./"+req.params.a+".pdf";
                res.download(filename);
            })
            //  console.log(filename);
            //  var filename = "./61e545cc6f9883e73e2ea1c4.pdf";
            
            // var filepath = "/"+filename;
            // console.log(filepath);
        })
    })

})

module.exports = routes;