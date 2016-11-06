var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var ContactsForm = require('./contactForm.jsx');
var Map = require('react-google-maps').GoogleMap;

var Contacts = React.createClass({
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
        // console.log('contacts.jsx', Map);
        if (this.state.address == null) {
            return (
                <div className="contact-us container">
                    <div className="row">
                        <div className="contact-form span7">
                            <p></p>
                            <ContactsForm/>
                        </div>
                        <div className="contact-address span5">
                            <div className="map"></div>
                            <h4>Адрес</h4>
                            <p></p>
                            <p>Phone:
                            </p>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.address != null) {
            return (
                <div className="contact-us container">
                    <div className="row">
                        <div className="contact-address span5">
                            <div className="map"></div>
                            <h4>Адрес</h4>
                            <p>{this.state.address.address}</p>
                            <p>Phone: {this.state.address.phone}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
});

module.exports = Contacts;
