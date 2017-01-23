var mongoose = require("mongoose");
var expenseSchema = mongoose.Schema({
    name: String,
    amount: String
});

module.exports = mongoose.model("expense", expenseSchema);