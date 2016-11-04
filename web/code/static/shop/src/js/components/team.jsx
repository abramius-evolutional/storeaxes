var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var Team = React.createClass({
	render: function () {
		return (
			<div className="team container">
	            <div className="team-title">
	                <h3>Meet Our Team</h3>
	            </div>
	            <div className="row">
	                <div className="team-text span3">
	                    <img src="/static/shop/dist/css/img/team/1.jpg" alt="" />
	                    <h4>John Doe</h4>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...</p>
	                    <div className="social-links">
	                        <a className="facebook" href=""></a>
	                        <a className="twitter" href=""></a>
	                        <a className="linkedin" href=""></a>
	                        <a className="email" href=""></a>
	                    </div>
	                </div>
	                <div className="team-text span3">
	                    <img src="/static/shop/dist/css/img/team/2.jpg" alt="" />
	                    <h4>Jane Doe</h4>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor...</p>
	                    <div className="social-links">
	                        <a className="facebook" href=""></a>
	                        <a className="twitter" href=""></a>
	                        <a className="linkedin" href=""></a>
	                        <a className="email" href=""></a>
	                    </div>
	                </div>
	                <div className="team-text span3">
	                    <img src="/static/shop/dist/css/img/team/3.jpg" alt="" />
	                    <h4>Tim Brown</h4>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...</p>
	                    <div className="social-links">
	                        <a className="facebook" href=""></a>
	                        <a className="twitter" href=""></a>
	                        <a className="linkedin" href=""></a>
	                        <a className="email" href=""></a>
	                    </div>
	                </div>
	                <div className="team-text span3">
	                    <img src="/static/shop/dist/css/img/team/4.jpg" alt="" />
	                    <h4>Sarah Red</h4>
	                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod...</p>
	                    <div className="social-links">
	                        <a className="facebook" href=""></a>
	                        <a className="twitter" href=""></a>
	                        <a className="linkedin" href=""></a>
	                        <a className="email" href=""></a>
	                    </div>
	                </div>
	            </div>
	        </div>
		);
	}
});


module.exports = Team;