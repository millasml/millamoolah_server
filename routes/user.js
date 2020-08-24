var express = require("express");
var router = express.Router();

const User = require("../models/user")

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.findById(req.uid).then(ans => res.send(ans)).catch((err) =>{
    console.log(err)
  })
  // res.send("respond with a resource");
});

router.post("/", function (req, res, next) {
  console.log("body", req.body.user)
  const userData = req.body.user;
  userData._id = req.uid
  console.log(req.uid)
  console.log(userData)
  const newUser = new User(userData);
  newUser.save(function (err){
    if (err){
      console.log(err)
      res.status(403).send("Insert Unsuccessful");
    }else {
      res.status(200).send("Insert Successful");
    }
  })
})

module.exports = router;
