var React = require("react");
var ExpenseEntry = require("./expenseEntry.jsx");
var AddExpenseEntry= require("./AddExpenseEntry.jsx");

module.exports = React.createClass({
   render: function() {
       return(
           <div className="row">
                <div className="col-md-12">
                  <AddExpenseEntry />
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
                        <th className="total">Total: &nbsp; ${this.props.total}</th>
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