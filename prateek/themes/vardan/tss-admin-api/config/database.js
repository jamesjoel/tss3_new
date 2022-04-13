const mongodb = require("mongodb");
const ServerApiVersion = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://james:jamesjoel@cluster0.rm4oe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = "tss-admin";

module.exports = {
    dbName : dbName,
    con : client,
    uniqueStr : "tssadmin"
    
}

/*

client.connect(err => {
  const collection = client.db(dbName).collection("devices");
  // perform actions on the collection object
  client.close();
});

*/



/*

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://james:<password>@cluster0.rm4oe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/