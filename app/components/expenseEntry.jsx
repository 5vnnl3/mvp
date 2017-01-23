var React = require("react");
var actions = require("../actions/expenseAction");

module.exports = React.createClass({
    deleteExpense: function(e){
        e.preventDefault();
        actions.deleteExpense(this.props.entry);
        console.log('delete');
    },
    render: function() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.entry.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteExpense}>&times;</span>
                </div>
                <div className="panel-body">
                    {this.props.entry.amount}
                </div>
            </div>
        )
    }
})