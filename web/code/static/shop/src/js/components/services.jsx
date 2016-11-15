var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var ServiceItem = require('./serviceItem.jsx');

var Service = React.createClass({
	getInitialState: function () {
		return {
			service: null,
			address: AppStore.getState().address
		};
	},
	componentDidMount: function () {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
	_onChange: function () {
		// console.log('service', )
		this.setState({
			service: AppStore.getState().service,
			address: AppStore.getState().address
		});
	},
	render: function () {
		var serviceNode, aboutContent = null;
		if (this.state.service !== null) {
			serviceNode = this.state.service.map(function(prop) {
				return (
					<ServiceItem prop={prop} key={prop.id} />
				);
			})
		}
		if (this.state.address !== null) {
			aboutContent = <div className="about-us-text span12">
	                    <p>{this.state.address.payment}</p>
	                    <p>{this.state.address.delivery}</p>
	                </div>
		}
		else if (this.state.service === null) {
			serviceNode = null;
		}
		return (
			<div className="what-we-do container">
	            <div className="row">
	            	{aboutContent}
	            	{serviceNode}
	            </div>
	        </div>
		);
	}
});


module.exports = Service;
