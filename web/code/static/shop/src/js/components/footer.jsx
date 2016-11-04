var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var Footer = React.createClass({
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
        // console.log('footer.jsx', this.state.address);
        var About = null, Adrress = null, phone = null; 
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
                        <p><i className="icon-phone"></i> Телефон: {phone}</p>
                        <p><i className="icon-envelope-alt"></i> Email: <a href="">taygasibru@gmail.com</a></p>
                    </div>
                </div>
                <div className="footer-border"></div>
            </div>
        </footer>
        );
    }
});


module.exports = Footer;