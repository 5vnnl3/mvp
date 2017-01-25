var React = require("react");
var ExpenseEntry = require("./expenseEntry.jsx");
var AddExpenseEntry= require("./AddExpenseEntry.jsx");

module.exports = React.createClass({
    // getInitialState: function() {
    //   var amounts = this.props.expenses.map((accum) => {return accum['amount'];});
    //   var totalInit = amounts.length > 1 ? amounts.reduce((accum, curr) => {return accum + curr;}) : amounts[0];
    //   return {
    //       expenses: this.props.expenses, 
    //       total: totalInit
    //   }  
    // },
  //   filterExpenses: function(query) {
  //     var filtered = this.props.expenses.filter((expense) => {return expense.trip.indexOf(query) > -1;});
  //     var newTotal = filtered.length > 1 ? filtered.reduce((accum, curr) => {return accum.amount + curr.amount;}) : filtered[0].amount;
  //     if (query === '') {newTotal = 1234;}
  //     var state = this.state;
  //     state['expenses'] = filtered;
  //     state['total'] = newTotal;
  //     this.setState(state);
  // },
   render: function() {
       return(
           <div className="row">
                <div className="col-md-12">
                  <AddExpenseEntry handleTripInputChange={this.filterExpenses} />
                  <br />
                </div>
                <div className="row tblwidth">
                <div className="col-md-12">
                  <table className="table table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="col-md-3">Trip Name</th>
                        <th className="col-md-3">Expense Description</th>
                        <th className="col-md-2 tright">Date</th>
                        <th className="col-md-2 total">Amount ($USD)</th>
                        <th className="col-md-2 tcenter">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          this.props.expenses.map(function(expense, index){
                              return(
                                  <ExpenseEntry entry={expense} key={"expense"+index} />
                              )         
                          })
                      } 
                    </tbody>
                    <tfoot>
                      <tr>
                        <th> </th>
                        <th> </th>
                        <th></th>
                        <th className="total">Total: ${this.state.total}</th>
                        <th> </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
           </div>
           </div>
       )
   } 
});