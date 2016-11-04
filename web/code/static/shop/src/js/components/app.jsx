var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
// import createBrowserHistory from 'history/lib/createBrowserHistory';
var createHashHistory = require('history').createHashHistory;
var history = createHashHistory();
var browserHistory = require('history').browserHistory;
var createHistory = require('history').createHistory;
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var HomeHeader = require('./homeHeader.jsx');
var Slider = require('./slider.jsx');
var Discription = require('./siteDiscription.jsx');
var Works = require('./work.jsx');
var Service = require('./services.jsx');
var Footer = require('./footer.jsx');
var render = require('react-dom');
var PortfolioTitle = require('./portfolioTitle.jsx');
var Portfolio = require('./portfolio.jsx');
var ServiceTitle = require('./serviceTitle.jsx');
var ServiceFullText= require('./serviceFullText.jsx');
var AboutTitle = require('./aboutTitle.jsx');
var AboutText = require('./aboutText.jsx');
var Team = require('./team.jsx');
var ContactsTitle = require('./contactsTitle.jsx');
var Contacts = require('./contacts.jsx');
var ProductsItem = require('./productItem.jsx');
var Modal = require('./modal.jsx');
var Basket = require('./basketForShoppimg.jsx');





var App = React.createClass({
	getInitialState: function () {
		return {
			statusShowModal: false,
			statusShowBasket: AppStore.getState().statusShowBasket
		};
	},
    _onChange: function () {
        this.setState({
        	statusShowModal: AppStore.getState().statusModal,
        	statusShowBasket: AppStore.getState().statusShowBasket
        });
    },
	componentDidMount: function () {
		var cooc = document.cookie.split(';');
		AppActions.getCoockie(cooc);
		// console.log('app.jsx', AppStore.getState().basketId);
		if (AppStore.getState().basketId !== null) {
			AppActions.getBasketInfo(AppStore.getState().basketId);
		}
		AppActions.updateWorkItems();
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function () {
		AppStore.removeChangeListener(this._onChange);
	},
	contextTypes: {
	    router: React.PropTypes.func
	},
	render: function  () {
		if (this.props.prop == '/') {
			return this.renderHome();
		}
		else if (this.props.prop == '/gallery') {
			return this.renderGallery();
		}
		else if (this.props.prop == '/service') {
			return this.renderService();
		}
		else if (this.props.prop == '/about') {
			return this.renderAbout();
		}
		else if (this.props.prop == '/contact') {
			return this.renderContact();
		}
		else if (this.props.prop == '/products') {
			return this.renderProductsItem();
		}
		{this.props.children}
	},
	renderHome: function () {
		document.title = 'Топор, купить топор, дамасские ножи, кованые изделия, кузнечный инструмент, Тайга';
		if (this.state.statusShowModal == true) {
			$('body').css('overflow','hidden');
			var modalShow = <Modal />
		}
		else if (this.state.statusShowModal == false) {
			$('body').css('overflow','auto');
			var modalShow = null;
		}
		if (this.state.statusShowBasket === false) {
			var basketComponent = null;
		}
		else if (this.state.statusShowBasket === true) {
			var basketComponent = <Basket />;
		}
		return (
			<div>
				{modalShow}
				{basketComponent}
				<HomeHeader prop={this.props.prop}></HomeHeader>
				<Slider />
				<Discription />
				<Works />
				<Service />
				<Footer />
			</div>
		);
	},
	renderGallery: function () {
		document.title = 'Купить топор, кованые изделия, кузнечный инструмент, Тайга';
		if (this.state.statusShowBasket === false) {
			var basketComponent = null;
		}
		else if (this.state.statusShowBasket === true) {
			var basketComponent = <Basket />;
		}
		return (
			<div>
				{basketComponent}
				<HomeHeader prop={this.props.prop}></HomeHeader>
				<PortfolioTitle />
				<Portfolio />
				<Footer />
			</div>
		);
	},
	renderService:function () {
		if (this.state.statusShowBasket === false) {
			var basketComponent = null;
		}
		else if (this.state.statusShowBasket === true) {
			var basketComponent = <Basket />;
		}
		return(
			<div>
				{basketComponent}
				<HomeHeader prop={this.props.prop}></HomeHeader>
				<ServiceTitle />
				<Service />
				<Footer />
			</div>
		);
	},
	renderAbout: function () {
		if (this.state.statusShowBasket === false) {
			var basketComponent = null;
		}
		else if (this.state.statusShowBasket === true) {
			var basketComponent = <Basket />;
		}
		return (
			<div>
				{basketComponent}
				<HomeHeader prop={this.props.prop}></HomeHeader>
				<AboutTitle />
				<AboutText />
				<Footer />

			</div>
		);
	},
	renderContact: function () {
		if (this.state.statusShowBasket === false) {
			var basketComponent = null;
		}
		else if (this.state.statusShowBasket === true) {
			var basketComponent = <Basket />;
		}
		return (
			<div>
				{basketComponent}
				<HomeHeader prop={this.props.prop}></HomeHeader>
				<ContactsTitle />
				<Contacts />
				<Footer />
			</div>
		);
	},
	renderProductsItem: function () {
		if (this.state.statusShowBasket === false) {
			var basketComponent = null;
		}
		else if (this.state.statusShowBasket === true) {
			var basketComponent = <Basket />;
		}
		return (
			<div>
				{basketComponent}
				<HomeHeader prop={this.props.prop}></HomeHeader>
				<ProductsItem />
				<Footer />
			</div>
		);
	}
});

module.exports = App;