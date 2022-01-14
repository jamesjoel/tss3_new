const express = require("express");
const routes = express.Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


routes.get("/", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss3");
        db.collection("city").find().toArray((err, data)=>{
            // console.log(data);
            // var arr=[];
            // for(var x in data[0]){
            //     var temp = data[0][x];
            //     if(isArray(temp)){

                    
            //         temp.forEach((x)=>{
            //             arr.push(x);
            //         })
            //     }
            // }
            // console.log(arr);
            // return;
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
        db.collection("student").find({ _id : objid }).toArray((err, data)=>{
            var pageData = { pagename : "edit", title : "Edit", data : data[0]};
            res.render("layout", pageData);
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

module.exports = routes;