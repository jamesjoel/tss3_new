let express = require("express");
let routes = express.Router();
let sha1 = require("sha1");
let mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let database = require("../config/database");
let collName = "user";
let rand = require("random-string-gen");
let path = require("path");

routes.post("/", (req, res)=>{
    
    var formdata = JSON.parse(req.body.formdata);
    
    delete formdata.re_password;
    formdata.password = sha1(formdata.password);

    
    var image = req.files.picture;
    var name = image.name;
    var arr = name.split(".");
    var ext = arr[arr.length - 1];
    var newname = rand(20)+"."+ext;
    formdata.pic = newname;

    // formdata.createdDate = new Date('15-12-2021');
    // 2022-03-28 13:05:41
    // 2022-12-15 00:00:00


    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection(collName).insertOne(formdata, (err)=>{
            image.mv(path.resolve()+"/assets/user-images/"+newname, (err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                res.send({ success : true });
            })
        })
    })
})




module.exports = routes;