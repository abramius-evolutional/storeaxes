var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');


var WorkItem = React.createClass({
	getInitialState: function () {
		return {url: this.props.prop.url, discription: this.props.prop.description};
	},
 	render: function () {
        // console.log("itemWork.jsx", this.state.url);
 		return (
 			<div className="work span3">
                <img src={this.props.prop.url} alt="" />
                <h4>Lorem Website</h4>
                <p>{this.discription}</p>
            </div>
 		);
 	}
 });

 module.exports = WorkItem;