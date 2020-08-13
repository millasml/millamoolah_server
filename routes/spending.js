var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const Spending = require("../models/spending")
/* GET users listing. */
router.get("/", function (req, res, next) {
  Spending.find({user_id : req.uid}).then((ans) => res.send(ans));
});

module.exports = router;
