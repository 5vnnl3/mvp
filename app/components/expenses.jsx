var React = require("react");
var ExpenseEntry = require("./expenseEntry.jsx");
var AddExpenseEntry= require("./AddExpenseEntry.jsx");

module.exports = React.createClass({
   render: function() {
       return(
           <div className="row">
                <div className="col-md-6">
                  <AddExpenseEntry />
                </div>
                <div className="col-md-6">
                    {
                        this.props.expenses.map(function(expense, index){
                            return(
                                <ExpenseEntry entry={expense} key={"expense"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});