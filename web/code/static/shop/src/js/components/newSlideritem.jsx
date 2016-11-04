var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var ImageGallery = require('react-image-gallery');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;


var NewSliders = React.createClass({
	mixins: [LinkedStateMixin],
	getInitialState: function () {
		return {
			isPlaying: true,
			slideInterval: 9000,
			showThumbnails: true,
			showIndex: false,
			showNav: true,
			showBullets: true
		};
	},
	internalState: {
		indexItem: 0
	},
	handleSlide: function(index) {
		console.log('Slid to ' + index);
	},
	onClick: function (e) {
		var status = true;
		AppActions.getCardModalProduct(this.internalState.indexItem);
		AppActions.getStatusModal(status);
	},
	getIndex: function (index) {
		this.internalState.indexItem = index;
	},
	render: function () {
		var images = AppStore.getState().images;
		return (

			<div className='sliderBox'>
					<ImageGallery

			    	ref={(i) => this._imageGallery = i}
			    	onClick={this.onClick}
					items={images}
					lazyLoad={true}
					onSlide={this.getIndex}
					showBullets={this.state.showBullets}
					showThumbnails={this.state.showThumbnails}
					showIndex={this.state.showIndex}
					showNav={this.state.showNav}
					slideInterval={parseInt(this.state.slideInterval)}
					autoPlay={this.state.isPlaying}/>
			</div>
    );
	}
});

module.exports = NewSliders;