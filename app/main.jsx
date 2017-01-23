var React = require("react");
var ReactDOM = require("react-dom");
var Expenses = require("./components/expenses.jsx");
var trips = require("./stores/trips");
var _expenses = trips.getExpenses();
trips.onChange(function(expenses) {
    _expenses = expenses;
    render();
});
              
function render(){
    ReactDOM.render(<Expenses expenses={_expenses} />, document.getElementById("container"));    
}
render();