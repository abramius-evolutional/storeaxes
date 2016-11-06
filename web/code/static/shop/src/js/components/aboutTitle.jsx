var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var AboutTitle = React.createClass({
	render: function () {
		return (
			<div className="page-title">
	            <div className="container">
	                <div className="row">
	                    <div className="span12">
	                        <i className="icon-user page-title-icon"></i>
	                        <h1>О нас "Тайга"</h1>
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
});

module.exports = AboutTitle;
