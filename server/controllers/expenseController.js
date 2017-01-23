var mongoose = require("mongoose");
var Expense = require("../data/expense");
var _ = require("underscore");

var router = require("express").Router();
router.route("/expenses/:id?").get(getExpenses).post(addExpense).delete(deleteExpense);

function getExpenses(req, res) {
    Expense.find(function (err, expenses) {
        if (err)
            res.send(err);
        else
            res.json(expenses);
    });
}

function addExpense(req, res) {
    var expense = new Expense(_.extend({}, req.body));
    expense.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(expense);
    });
}

function deleteExpense(req, res) {
    var id = req.params.id;
    Expense.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;