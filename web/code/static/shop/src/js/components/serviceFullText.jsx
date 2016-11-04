var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var ServiceFullText = React.createClass({
	render: function () {
		return (
			<div className="services-full-width container">
	            <div className="row">
	                <div className="services-full-width-text span12">
	                    <h4></h4>
	                    <p></p>
	                </div>
	            </div>
	        </div>
		);
	}
});

module.exports = ServiceFullText;