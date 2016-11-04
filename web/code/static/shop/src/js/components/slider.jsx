var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var HomeHeader = require('./homeHeader.jsx');
var SliderItem = require('./sliderItem.jsx');
var NewSliders = require('./newSlideritem.jsx');



var Slider = React.createClass({
	getInitialState: function () {
		return {
			sliders: null
		};
	},
	componentDidMount: function () {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
	_onChange: function () {
		this.setState({sliders: AppStore.getState().sliders});
	},
	render: function () {
		var slide;
		if (this.state.sliders != null) {
			slide = this.state.sliders.map(function(prop) {
				return (
					<SliderItem prop={prop} key={prop.id} />
				);
			});
		}
		else if(this.state.sliders != null) {
			slide = null;
		}
		return (
			<div className="slider sliderCorusel">
	            <NewSliders />
	        </div>
		);
	}
});

module.exports = Slider;