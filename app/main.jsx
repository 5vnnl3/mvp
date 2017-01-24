var React = require("react");
var ReactDOM = require("react-dom");
var Expenses = require("./components/expenses.jsx");
var expenseStorage = require("./stores/expenseStorage");
var _expenses = [];
var getExpensesCB = function(expenses){
    _expenses = expenses;
    render();
};
expenseStorage.onChange(getExpensesCB);

function render() {
    ReactDOM.render(<Expenses expenses={_expenses} />, document.getElementById("container"));  
    console.log('rendered!');
}