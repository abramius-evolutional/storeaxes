var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var ItemBasket = require('./itemBasket.jsx');
var ContactForm = require('./contactForm.jsx');

var BasketForShoppimg = React.createClass({
	getInitialState: function() {
		return {
			basketInfo: AppStore.getState().basketIhfo,
			statusShowForm: false,
			basketId: AppStore.getState().basketId
		};
	},
	internalState: {
		isMouned: false
	},
	closeBasket: function () {
		AppActions.closeBasket();
	},
	onClickBackground: function (e) {
		// console.log('basketForShoppimg.jsx', e.target);
		if (e.target === document.getElementById('modalBackground')) {
			AppActions.closeBasket();
		}
	},
	componentDidMount: function () {
		this.internalState.isMouned = true;
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
    	this.internalState.isMouned = false;
        AppStore.removeChangeListener(this._onChange);
    },
    openForm: function () {
    	this.setState({statusShowForm: true});
    },
    _onChange: function () {
    	if (this.internalState.isMouned === true) {
    		this.setState({
    			basketInfo: AppStore.getState().basketIhfo,
    			basketId: AppStore.getState().basketId
    		});
    	}
    },
	render: function() {
		var basketItems = null, componentForm = null, basketId = this.state.basketId;
		// console.log('basketForShoppimg.jsx', this.state.basketId);
		basketItems = this.state.basketInfo.map(function (prop, id) {
			// console.log('basketForShoppimg.jsx', itemBasket);
			return (
				<ItemBasket basketId={basketId} key={id} prop={prop} />
			);
		})
		if (this.state.statusShowForm === true) {
			componentForm = <ContactForm />
		}
		return (
			<div id='modalBackground' onClick={this.onClickBackground} className='modalBackground'>
				<div className='basket'>
					<div className='basketHeader'>
						<h4>Корзина</h4>
						<button onClick={this.closeBasket}><i className="fa fa-times" ariaHidden="true"></i></button>
					</div>
					{basketItems}
					<div className='basketFooter'>
						<button onClick={this.closeBasket}>Закрыть</button>
						<button onClick={this.openForm}>Оформить</button>
					</div>
				</div>
				{componentForm}
			</div>
		);
	}

});

module.exports = BasketForShoppimg;