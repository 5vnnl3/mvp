var dispatcher = require("../dispatcher");
var expenseService = require("../services/expenseService");

function expenseStorage() {
    var listeners = [];

    function onChange(listener) {
        getExpenses(listener);
        listeners.push(listener);
    }
    
    function getExpenses(cb){
        expenseService.getExpenses().then(function (res) {
            cb(res);
        });
    }

    function addExpense(expense) {
        expenseService.addExpense(expense).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteExpense(expense) {
        expenseService.deleteExpense(expense).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getExpenses(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "expense") {
            switch (split[1]) {
                case "addExpense":
                    addExpense(payload.expense);
                    break;
                case "deleteExpense":
                    deleteExpense(payload.expense);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = expenseStorage();