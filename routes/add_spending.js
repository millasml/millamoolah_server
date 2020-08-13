var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const Spending = require("../models/spending");

router.post("/", function (req, res, next) {
  Spending.collection.insert(req.body, function (err, docs) {
    if (err) {
      res.status(403).send("Insert Unsuccessful");
    } else {
      res.status(200).send("Insert Successful");
    }
  });
});

module.exports = router;
