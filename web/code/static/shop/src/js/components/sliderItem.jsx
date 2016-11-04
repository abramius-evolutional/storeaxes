var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');


var SliderItem = React.createClass({
	render: function () {
		return (
			<li data-thumb={this.props.prop.url}>
                <img src={this.props.prop.url} />
                <p className="flex-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur.</p>
            </li>
		);
	}
});




module.exports = SliderItem;