var React = require("react");
var ExpenseEntry = require("./expenseEntry.jsx")

module.exports = React.createClass({
   render: function() {
       return(
           <div className="row">
                <div className="col-md-6">
                    //We will add add expense functionality here
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