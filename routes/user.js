var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  location: String,
  main_currency: String,
  goals: [{ item: String, isComplete: Boolean }],
  recurring_expenses: [
    {
      item: String,
      start_date: Date,
      end_date: Date,
      category: String,
      monthly_amount: String,
    },
  ],
  recurring_incomes: [
    {
      item: String,
      start_date: Date,
      end_date: Date,
      category: String,
      monthly_amount: String,
    },
  ],
  monthly_overview: [
    { date: Date, month_expense: Number, month_income: Number },
  ],
});
const User = mongoose.model("User", userSchema);



/* GET users listing. */
router.get("/", function (req, res, next) {
  User.findById("Darrel_Sipes99").then(ans => res.send(ans))
  // res.send("respond with a resource");
});

module.exports = router;
