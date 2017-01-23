var dispatcher = require("../dispatcher");

function trips () {
    var listeners = [];
    var expenses = [{ name: "Food", amount:"$123" }, 
                    { name: "Train", amount:"$567" }, 
                    { name: "Ticket", amount:"$345" }];

    function getExpenses() {
        return expenses;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addExpense(expense) {
        expenses.push(expense);
        triggerListeners();
    }

    function deleteExpense(expense) {
        var _index;
        expenses.map(function (s, index) {
            if (s.name === school.name) {
                _index = index;
            }
        });
        expenses.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(expenses);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "expense") {
            switch (split[1]) {
                case "addExpense":
                    addSchool(payload.expense);
                    break;
                case "deleteExpense":
                    deleteSchool(payload.expense);
                    break;
            }
        }
    });

    return {
        getExpenses: getExpenses,
        onChange: onChange
    }
}

module.exports = trips();