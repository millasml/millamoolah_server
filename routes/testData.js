var express = require("express");
var router = express.Router();

var message = "failed";

const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = "mongodb://mongodb:27017/";

// Database Name
const dbName = "millamoolah";

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err, client) {
  if (err ) {
    console.log(err);
    return
  }

  const db = client.db(dbName);
  console.log("connected to db")
  const col = db.collection("users");
  col.find({}).next(function (err, docs) {
    // console.log(docs)
    message = docs;
  });

  client.close();
});

router.get("/", function (req, res, next) {
  res.send(message);
// res.send("testing route")
});
module.exports = router;
