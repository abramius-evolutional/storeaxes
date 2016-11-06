var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var Footer = React.createClass({
    getInitialState: function() {
        return {address: AppStore.getState().address};
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function() {
        this.setState({address: AppStore.getState().address});
    },
    render: function() {
        // console.log('footer.jsx', this.state.address);
        var About = null,
            Adrress = null,
            phone = null;
        if (this.state.address !== null) {
            About = this.state.address.about;
            Adrress = this.state.address.address;
            phone = this.state.address.phone;
        }
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="widget span3">
                            <h4>Контакты</h4>
                            <p>
                                <i className="icon-phone"></i>
                                Телефон: {phone}</p>
                            <p>
                                <i className="icon-envelope-alt"></i>
                                Email:
                                <a href="">taygasibru@yandex.ru</a>
                            </p>
                        </div>
                        <div className="catalog widget span3">
                            <h4>Разделы</h4>
                            <span><i className="icon-home"></i><Link to="/">Главная</Link></span>
                            <span><i className="icon-camera"></i><Link to="/gallery">Каталог</Link></span>
                            <span><i className="icon-tasks"></i><Link to="/service">Доставка и оплата</Link></span>
                            <span><i className="icon-user"></i><Link to="/about">О Нас</Link></span>
                            <span><i className="icon-envelope-alt"></i><Link to="/contact">Контакты</Link></span>
                        </div>
                    </div>
                    <div className="footer-border"></div>
                    <div className='row'>
                        <a target='_blank' style={{
                            float: 'left',
                            marginLeft: '37px'
                        }} href='https://vk.com/club130190217'>
                            <i style={{
                                color: 'rgb(88,124,162)'
                            }} className="fa fa-vk fa-4x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
});
module.exports = Footer;
