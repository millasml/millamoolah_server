var express = require("express");
var router = express.Router();

const Savings = require("../models/savings")
/* GET users listing. */
router.get("/", function (req, res, next) {
    Savings.find({user_id : req.uid}).then((ans) => res.send(ans));
});

router.post("/", function (req, res, next) {
    Savings.collection.insert(req.body, function (err, docs) {
    if (err) {
      res.status(403).send("Insert Unsuccessful");
    } else {
      res.status(200).send("Insert Successful");
    }
  });
});

router.delete("/", function (req, res, next) {
  console.log(req.body.transaction_id)
  Savings.deleteOne( {_id : req.body.transaction_id}, function (err) {
    if (err) {
      res.status(403).send("Delete Unsuccessful");
    } else {
      res.status(200).send("Delete Successful");
    }
  });
});

module.exports = router;
