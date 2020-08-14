const mongoose = require("mongoose");

const savingsSchema = new mongoose.Schema({
    user_id: String,
    date: Date,
    item: String,
    amount: Number,
    category: String,
  });

const Savings = mongoose.model("Savings", savingsSchema, "income");

module.exports = Savings;
