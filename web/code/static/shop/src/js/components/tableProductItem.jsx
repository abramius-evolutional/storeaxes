var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var TableProductItem = React.createClass({
	componentDidMount: function () {
        var id = this.props.params.id;
    },
    setIdItem: function () {
        var id = this.props.prop.id;
        AppActions.getInfoProductsItem(id);
    },
    getAddItemBasket: function () {
		// console.log('productItem.jsx', this.state.statusCreateBasket, this.state.basketId);
		AppActions.getAddItemBasket({idItem: this.props.params.id, basket: this.props.basketId});
	},
	render: function() {
		// document.title = 'tayga';
		console.log('tableProductItem.jsx', document.title);
		var description;
        if (this.props.prop.description.length > 80) {
            description = this.props.prop.description.substring(0, 80) + '...';
        }
        else if (this.props.prop.description.length <= 80) {
            description = this.props.prop.description + '...';
        }
		return (
			<li >
                <div className="workTableItem">
                    <Link onClick={this.setIdItem} to={`/products/${this.props.prop.id}`} >
                        <img src={this.props.prop.url} alt={this.props.prop.title} />
                    </Link>
                    <h4>{this.props.prop.title}</h4>
                    <div>
                    	<p>{description}</p>
						<div className='tultipDiscription'>{this.props.prop.description}</div>
                    </div>
                    <button onClick={this.getAddItemBasket}>В корзину</button>
                    <h5>Цена: {this.props.prop.prise} <i className='fa fa-rub' ></i></h5>
                </div>
            </li>
		);
	}

});

module.exports = TableProductItem;