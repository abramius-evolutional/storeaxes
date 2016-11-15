var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var AboutText = React.createClass({
	getInitialState: function () {
		return {
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
		this.setState({address: AppStore.getState().address});
	},
	render: function () {
		// console.log('abouttext', this.state.address.about);
		if (this.state.address !== null) {
			return (
				<div className="about-us container">
		            <div className="row">
		                <div className="about-us-text span12">
		                    <p>{this.state.address.about}</p>
		                    {/*<p>ИП-Верескунов Иван Александрович</p>*/}
		                </div>
		            </div>
		        </div>
			);
		}
		else if (this.state.address === null) {
			return (
				<div className="about-us container">
		            <div className="row">
		                <div className="about-us-text span12">
		                   <p></p>
		                    <p></p>
		                </div>
		            </div>
		        </div>
			);
		}
	}
});

module.exports = AboutText;
