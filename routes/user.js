var express = require("express");
var router = express.Router();

const User = require("../models/user")



/* GET users listing. */
router.get("/", function (req, res, next) {
  User.findById(req.uid).then(ans => res.send(ans))
  // res.send("respond with a resource");
});

module.exports = router;
