var React = require("react");
var ReactDOM = require("react-dom");
var Expenses = require("./components/expenses.jsx");
var expenseStorage = require("./stores/expenseStorage");
var _expenses = [];
var _total = 0;
var getExpensesCB = function(expenses){
    _expenses = expenses;
    var amounts = _expenses.map((accum) => {return accum['amount'];});
    _total = amounts.reduce((accum, curr) => {return accum+ curr;});
    render();
};


expenseStorage.onChange(getExpensesCB);
function render() {
    ReactDOM.render(<Expenses total={_total} expenses={_expenses} />, document.getElementById("container"));  
}