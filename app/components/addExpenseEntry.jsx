var React = require("react");
var actions = require("../actions/expenseAction");

module.exports = React.createClass({
    getInitialState: function() {
      return {
          trip: "",
          name: "",
          amount: "",
          date: new Date().toLocaleString().split(',')[0]
      }  
    },
    addExpense:function(e){
        e.preventDefault();
        actions.addExpense(this.state);
        console.log('add');
    },
    handleInputChange: function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    numbersOnly: function(e){
      const re = /[0-9A-F:]+/g;
      if (!re.test(e.key)) {
        e.preventDefault();
      }
    },
    render: function() {
        return(
            <form className="form" onSubmit={this.addExpense}>
                <div className="form-group">
                    <label className="control-label" htmlFor="trip">Trip Name:</label>
                    <input type="text" className="form-control" id="trip" name="trip" value={this.state.trip} onChange={this.handleInputChange} placeholder="i.e. NYE 2018 in NYC, Eurotrip June 2018, etc." />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Expense Description:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="i.e. flight to Rome, dinner at French Laundry split with Amy, etc." />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="amount">Amount ($USD):</label>
                    <input type="text" className="form-control" id="amount" name="amount" value={this.state.amount} onChange={this.handleInputChange} onKeyPress={(e) => this.numbersOnly(e)} placeholder="Numbers only!" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="date">Date:</label>
                    <input type="text" className="form-control" id="date" name="date" value={this.state.date} onChange={this.handleInputChange} />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Expense</button>
                </div>
            </form>
        )
    }
})

  //               <div class="form-group">
  //   <label for="exampleSelect1">Select existing trip: </label>
  //   <select class="form-control" id="exampleSelect1">
  //     <option>1</option>
  //     <option>2</option>
  //     <option>3</option>
  //     <option>4</option>
  //     <option>Create new trip</option>
  //   </select>
  // </div>