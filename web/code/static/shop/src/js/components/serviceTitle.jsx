var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var ServiceTitle = React.createClass({
	render: function () {
		return (
			<div className="page-title">
	            <div className="container">
	                <div className="row">
	                    <div className="span12">
	                        <i className="icon-tasks page-title-icon"></i>
	                        <h2>Оплата и доставка</h2>
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
});

module.exports = ServiceTitle;