var $ = require("jquery");
var promise = require("es6-promise");
// var resourceUrl = "http://localhost:8000/api/expenses";

module.exports = {
    getExpenses: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'api/expenses',
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    addExpense: function (expense) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'api/expenses',
                data: JSON.stringify(expense),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteExpense: function (expense) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: 'api/expenses' + "/" + expense._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}