var mongoose = require("mongoose");
var expenseSchema = mongoose.Schema({
    trip: String,
    name: String,
    amount: Number,
    date: String
});

module.exports = mongoose.model("expense", expenseSchema);