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
    { date: String, month_expense: Number, month_income: Number },
  ],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
