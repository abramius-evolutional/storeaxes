var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var AppActions = require('./action/actions.js');
// import createBrowserHistory from 'history/lib/createBrowserHistory';
var createHistory = require('history').createHashHistory;
// var history = createHashHistory();
var browserHistory = require('react-router').browserHistory;
var history = createHistory({
  queryKey: false
});
var AppStore = require('./stores/store.js');
var App = require('./components/app.jsx');

// console.log("main");

var App1 = React.createClass({
	render: function () {
        var elem = document.getElementById('bodyBox');
        if (elem !== null) {
            elem.scrollIntoView(true);
        }
        // console.log('apppapppapp');
		return (<App prop="/" />);
	}
});
var AppGallery =  React.createClass({
	render: function () {
        var elem = document.getElementById('bodyBox');
        if (elem !== null) {
            elem.scrollIntoView(true);
        }
        // console.log('apppapppapp');
		return (<App prop="/gallery" />);
	}
});

var AppService = React.createClass({
	render: function () {
        var elem = document.getElementById('bodyBox');
        if (elem !== null) {
            elem.scrollIntoView(true);
        }
        // console.log('apppapppapp');
		return (<App prop="/service" />);
	}
});

var AppAbout = React.createClass({
	render: function () {
        var elem = document.getElementById('bodyBox');
        if (elem !== null) {
            elem.scrollIntoView(true);
        }
        // console.log('apppapppapp');
		return (<App prop="/about" />);
	}
});

var AppContacts = React.createClass({
	render: function () {
        var elem = document.getElementById('bodyBox');
        if (elem !== null) {
            elem.scrollIntoView(true);
        }
        // console.log('apppapppapp');
		return (<App prop="/contact" />);
	}
});

var AppProductsItem = React.createClass({
	componentDidMount: function () {
		// console.log("stores", window.location.pathname.substr(10));
		AppActions.getInfoProductsItem(window.location.pathname.substr(10));
	},
	render: function () {
        var elem = document.getElementById('bodyBox');
        if (elem !== null) {
            elem.scrollIntoView(true);
        }
        // console.log('apppapppapp');
		return (<App prop="/products" />);
	}
});


 

ReactDOM.render((
	<Router history={browserHistory}  >
		<Route path="/" component={App1} />
		<Route path="/gallery" component={AppGallery} />
		<Route path="/products/:id" component={AppProductsItem} />
		<Route path="/service" component={AppService} />
		<Route path="/about" component={AppAbout} />
		<Route path="/contact" component={AppContacts} />
	</Router>
	), document.getElementById('content'));

// ReactDOM.render((
// 	<Router history={history} routes={routes} >
// 	</Router>
// ), document.getElementById('content'));




// ReactDOM.render(	
// 	<App />,
// 	document.getElementById('content')
// );
