var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var ItemBasket = React.createClass({
	onDelete: function () {
		AppActions.deleteBasketItem({item_id: this.props.prop.item.id, basket_id: this.props.basketId})
	},
	onChangeCount: function (e) {
		console.log('itemBasket.jsx', e.target.value);
		AppActions.setCountItemBasket({item_id: this.props.prop.item.id, basket_id: this.props.basketId, count: e.target.value})
	},
	render: function() {
		// console.log('itemBasket.jsx', this.props.prop.item.id);
		return (
			<div className='basketParams'>
				<img alt={this.props.prop.item.title} src={this.props.prop.item.url[0]} />
				<h6>{this.props.prop.item.title}</h6>
				<input type="number" min="1" max="99" name="points" step="1" onChange={this.onChangeCount} defaultValue={this.props.prop.count}/>
				<button onClick={this.onDelete}><i className="fa fa-times" ariaHidden="true"></i></button>
				<span>{'цена: ' + (this.props.prop.item.prise)}</span>
			</div>
		);
	}

});

module.exports = ItemBasket;
