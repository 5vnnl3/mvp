var dispatcher = require("../dispatcher");

module.exports = {
    addExpense: function(expense) {
        dispatcher.dispatch({
           expense: expense,
           type:"expense:addExpense" 
        });
    },
    deleteExpense: function(expense) {
        dispatcher.dispatch({
           expense: expense,
           type:"expense:deleteExpense" 
        });
    }
}