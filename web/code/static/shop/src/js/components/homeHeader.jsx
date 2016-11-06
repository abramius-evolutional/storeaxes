var React = require('react');
var AppActions = require('../action/actions.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var AppStore = require('../stores/store.js');

var HomeHeader = React.createClass({
    getInitialState: function () {
        return {
            address: AppStore.getState().address,
            basketInfo: AppStore.getState().basketIhfo,
            totalPrise: AppStore.getState().totalPrise
        };
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
            address: AppStore.getState().address,
            basketInfo: AppStore.getState().basketIhfo,
            totalPrise: AppStore.getState().totalPrise
        });
    },
    openBasket: function () {
        AppActions.openBasket();
    },
	render: function () {
        var countBasketItems = this.state.basketInfo.length;
        // console.log('homeHeader.jsx', countBasketItems);
        if (this.state.address != null) {
            var phone1 = <div className='boxName'>  
                            <h2>  
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
taygasibru@yandex.ru</h2>
                            <h2><i style={{marginLeft: '14px'}} className="fa fa-mobile" aria-hidden="true"></i>{this.state.address.phone}</h2>
                        </div>
        }
        else if (this.state.address == null) {
            var phone1 = <div className='boxName'><h2><i className="fa fa-envelope-o" aria-hidden="true"></i>taygasibru@yandex.ru</h2></div>
        }
        var navbar;
        if (this.props.prop == "/") {
            navbar = <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li className="current-page">
                                <Link to="/"><i className="icon-home"></i><br />Главная</Link>
                            </li>
                            <li>
                                <Link to="/gallery" activeClassName="active"><i className="icon-camera"></i><br />Каталог</Link>
                            </li>
                            <li>
                                <Link to="/service"><i className="icon-tasks"></i><br />Доставка и оплата</Link>
                            </li>
                            <li>
                                <Link to="/about"><i className="icon-user"></i><br />О Нас</Link>
                            </li>
                            <li>
                                <Link to="/contact"><i className="icon-envelope-alt"></i><br />Контакты</Link>
                            </li>
                        </ul>
                    </div>
        }
        else if (this.props.prop == "/gallery") {
            navbar = <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li>
                                <Link to="/"><i className="icon-home"></i><br />Главная</Link>
                            </li>
                            <li className="current-page">
                                <Link to="/gallery" activeClassName="active"><i className="icon-camera"></i><br />Каталог</Link>
                            </li>
                            <li>
                                <Link to="/service"><i className="icon-tasks"></i><br />Доставка и оплата</Link>
                            </li>
                            <li>
                                <Link to="/about"><i className="icon-user"></i><br />О Нас</Link>
                            </li>
                            <li>
                                <Link to="/contact"><i className="icon-envelope-alt"></i><br />Контакты</Link>
                            </li>
                        </ul>
                    </div>
        }
        else if (this.props.prop == "/service") {
            navbar = <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li>
                                <Link to="/"><i className="icon-home"></i><br />Главная</Link>
                            </li>
                            <li>
                                <Link to="/gallery" activeClassName="active"><i className="icon-camera"></i><br />Каталог</Link>
                            </li>
                            <li className="current-page">
                                <Link to="/service"><i className="icon-tasks"></i><br />Доставка и оплата</Link>
                            </li>
                            <li>
                                <Link to="/about"><i className="icon-user"></i><br />О Нас</Link>
                            </li>
                            <li>
                                <Link to="/contact"><i className="icon-envelope-alt"></i><br />Контакты</Link>
                            </li>
                        </ul>
                    </div>
        }
        else if (this.props.prop == "/about") {
            navbar = <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li>
                                <Link to="/"><i className="icon-home"></i><br />Главная</Link>
                            </li>
                            <li>
                                <Link to="/gallery" activeClassName="active"><i className="icon-camera"></i><br />Каталог</Link>
                            </li>
                            <li>
                                <Link to="/service"><i className="icon-tasks"></i><br />Доставка и оплата</Link>
                            </li>
                            <li className="current-page">
                                <Link to="/about"><i className="icon-user"></i><br />О Нас</Link>
                            </li>
                            <li>
                                <Link to="/contact"><i className="icon-envelope-alt"></i><br />Контакты</Link>
                            </li>
                        </ul>
                    </div>
        }
        else if (this.props.prop == "/contact") {
            navbar = <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li>
                                <Link to="/"><i className="icon-home"></i><br />Главная</Link>
                            </li>
                            <li>
                                <Link to="/gallery" activeClassName="active"><i className="icon-camera"></i><br />Каталог</Link>
                            </li>
                            <li>
                                <Link to="/service"><i className="icon-tasks"></i><br />Доставка и оплата</Link>
                            </li>
                            <li>
                                <Link to="/about"><i className="icon-user"></i><br />О Нас</Link>
                            </li>
                            <li className="current-page">
                                <Link to="/contact"><i className="icon-envelope-alt"></i><br />Контакты</Link>
                            </li>
                        </ul>
                    </div>
        }
        else if (this.props.prop == "/products") {
            navbar = <div className="nav-collapse collapse">
                        <ul className="nav pull-right">
                            <li>
                                <Link to="/"><i className="icon-home"></i><br />Главная</Link>
                            </li>
                            <li>
                                <Link to="/gallery" activeClassName="active"><i className="icon-camera"></i><br />Каталог</Link>
                            </li>
                            <li>
                                <Link to="/service"><i className="icon-tasks"></i><br />Доставка и оплата</Link>
                            </li>
                            <li>
                                <Link to="/about"><i className="icon-user"></i><br />О Нас</Link>
                            </li>
                            <li>
                                <Link to="/contact"><i className="icon-envelope-alt"></i><br />Контакты</Link>
                            </li>
                        </ul>
                    </div>
        }
		return (
		<div className='headerContainer'>
            <div style={{margin: '0px', width: '100%'}} className="container">
                <div className="header row">
                    <div style={{width: '97%'}} className="span12">
                        <div className="navbar">
                            <div style={{paddingRight: '40px'}} className="navbar-inner navbarInner">
                                <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </a>
                                    <Link to="/" className="brand">
                                        <h2 className='logoText' ></h2>
                                    </Link>
                                {phone1}
                                {navbar}
                            </div>
                            <div onClick={this.openBasket} className='shoppingBasket' style={{position: 'absolute', top: '131px', right: '10px', position: 'fixed'}}>
                                <div className='shoppingPicker'>
                                    <span>{countBasketItems}</span>
                                </div>
                                <div className="prise">
                                    <span>{this.state.totalPrise + ' '}<i className='fa fa-rub' ></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		);
	}
});

module.exports = HomeHeader;
