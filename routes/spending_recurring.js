var express = require("express");
var router = express.Router();

const User = require("../models/user");

router.post("/", async function (req, res, next) {
  const userData = await User.findById(req.uid);

  userData.recurring_expenses.push(req.body.newItem);

  const result = await User.updateOne(
    { _id: req.uid },
    { recurring_expenses: userData.recurring_expenses }
  );
  res.send(result);
});

router.delete("/", async function (req, res, next) {
  const userData = await User.findById(req.uid);

  userData.recurring_expenses.id(req.body.transaction_id).remove();
  userData.save(function (err) {
    if (err) {
      res.status(403).send("Insert Unsuccessful");
    } else {
      res.status(200).send("Insert Successful");
    }
  })

});

module.exports = router;
