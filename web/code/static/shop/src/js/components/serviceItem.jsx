var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var ServiceItem = React.createClass({
	render: function () {
        // console.log('serviceItem.jsx', this.props.prop.link);
		return (
			<div className="service span3">
                <div className="icon-awesome">
                    <i className={this.props.prop.iconClassName}></i>
                </div>
                <h4>{this.props.prop.title}</h4>
                <p>{this.props.prop.p}</p>
                <a href={this.props.prop.link} target="_blank">Перейти...</a>
            </div>
		);
	}
});

module.exports = ServiceItem;
