const mongoose = require("mongoose");

const spendingSchema = new mongoose.Schema({
    user_id: String,
    date: Date,
    item: String,
    amount: Number,
    category: String,
  });

const Spending = mongoose.model("Spending", spendingSchema, "expense");

module.exports = Spending;
