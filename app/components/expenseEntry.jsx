var React = require("react");
var actions = require("../actions/expenseAction");

module.exports = React.createClass({
    deleteExpense: function(e){
        e.preventDefault();
        actions.deleteExpense(this.props.entry);
    },
    render: function() {
        return(

          <tr>
            <td>{this.props.entry.trip}</td>
            <td>{this.props.entry.name} </td>
            <td className="tright">{this.props.entry.date} </td>
            <td className="total">${this.props.entry.amount}</td>
            <td className="tcenter"><span className="text-uppercase delete-button" onClick={this.deleteExpense}>Delete</span></td>
          </tr>

        )
    }
})