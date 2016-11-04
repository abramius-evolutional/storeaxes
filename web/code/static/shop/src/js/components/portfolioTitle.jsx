var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var Title = React.createClass({
	render: function () {
		return (
			<div className="page-title">
	            <div className="container">
	                <div className="row">
	                    <div className="span12">
	                        <i className="icon-camera page-title-icon"></i>
	                        <h2>Каталог</h2>
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
});

module.exports = Title;