var React = require("react");
var actions = require("../actions/expenseAction");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          amount:""
      }  
    },
    addExpense:function(e){
        e.preventDefault();
        actions.addExpense(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addExpense}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Expense Description:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="i.e. airfaire, hotel, meal, entertainment, gift, etc." />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="amount">Amount</label>
                    <input type="text" className="form-control" id="tagline" name="amount" value={this.state.address} onChange={this.handleInputChange} placeholder="$USD" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Expense</button>
                </div>
            </form>
        )
    }
})