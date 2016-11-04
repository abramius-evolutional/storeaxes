var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var Modal = React.createClass({
	getInitialState: function () {
		return {
			cardProduct: AppStore.getState().modalCardProduct
		};
	},
	hideModal: function  (e) {
		if (e.target != document.getElementById('modalContent') || e.target == document.getElementById('hide')) {
			var status = false;
			AppActions.getStatusModal(status);
		}
	},
	render: function () {
		return (
			<div className="modalBackground" onClick={this.hideModal} >
				<div id="modalContent" className="modalContent">
					<img style={{width: 80 + "%"}} src={this.state.cardProduct.url} />
					<div className="titleBox">
						<h2>{this.state.cardProduct.title}</h2>
						<input onClick={this.hideModal} id="hide" type="button" value="Закрыть" />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Modal;