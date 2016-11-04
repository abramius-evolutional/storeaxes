var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var Discription = React.createClass({
	render: function () {
		return (
			<div className="presentation container">
	            <h2>Мастерская "ТАЙГА" производит профессиональный, кованный инструмент в древних традициях по современным технологиям, высокого качества исполнения для ручной работы и долгих лет службы! Мы изготавливаем трехслойные кузнечные топоры, колуны, топоры из дамасской стали, тесла, дамасские ножи, скобеля...</h2>
	            <p></p>
	        </div>
		);
	}
});

module.exports = Discription;