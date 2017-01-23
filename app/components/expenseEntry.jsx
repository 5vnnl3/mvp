var React = require("react");

module.exports = React.createClass({
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.entry.name}
                </div>
                <div className="panel-body">
                    {this.props.entry.amount}
                </div>
            </div>
        )
    }
})