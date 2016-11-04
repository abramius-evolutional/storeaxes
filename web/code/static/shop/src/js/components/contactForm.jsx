var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');

var ContactsForm = React.createClass({
	getInitialState: function () {
		return ({
			name: null,
			email: null,
			phone: null,
			message: null,
			nameBox: null,
			emailBox: null,
			phoneBox: null,
			messageBox: null,
			adressBox: null,
			adress: null,
			statusSend: AppStore.getState().statusSend,
			basketId: AppStore.getState().basketId
		});
	},
	internalState: {
		name: null,
		email: null,
		phone: null,
		message: null,
		adress: null,
		isMouned: false
	},
	componentDidMount: function () {
		this.internalState.isMouned = true;
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
		this.internalState.isMouned = false;
        AppStore.removeChangeListener(this._onChange);
    },
	_onChange: function () {
		if (this.internalState.isMouned === true) {
    		this.setState({
				statusSend: AppStore.getState().statusSend,
				basketId: AppStore.getState().basketId
			});
    	}
	},
	getInfo: function (e) {
		if (e.target == document.getElementById('name')) {
			this.internalState.name = e.target.value;
			this.setState({nameBox: e.target.value});
		}
		else if (e.target == document.getElementById('email')) {
			this.internalState.email = e.target.value;
			this.setState({emailBox: e.target.value});
		}
		else if (e.target == document.getElementById('message')) {
			this.internalState.message = e.target.value;
			this.setState({messageBox: e.target.value});
		}
		else if (e.target == document.getElementById('phone')) {
			this.internalState.phone = e.target.value;
			this.setState({phoneBox: e.target.value});
		}
		else if (e.target == document.getElementById('adress')) {
			this.internalState.adress = e.target.value;
			this.setState({adressBox: e.target.value});
		}
	},
	openForm: function () {
		AppActions.openForms();	
	},
	sendInfo: function () {
		if (this.internalState.name != null) {
			this.setState({name: null});
			if (this.internalState.message != null) {
				this.setState({message: null});
			}
			if (this.internalState.adress !== null) {
				this.setState({adress: null});
				if (this.internalState.email !== null) {
					this.setState({email: null});
					var infoBox = {
						name: this.internalState.name,
						phone: this.internalState.phone,
						email: this.internalState.email,
						message: this.internalState.message + '>>>>>>Адрес<<<<<<<<' + this.internalState.adress,
						basket_id: this.state.basketId
					};
					// console.log('contactForm.jsx', infoBox);
					AppActions.setForms(infoBox);
					this.internalState.name = null;
					this.internalState.message = null;
					this.internalState.email = null;
					this.internalState.phone = null;
					this.internalState.adress = null;
					this.setState({
						nameBox: "",
						emailBox: '',
						messageBox: '',
						phoneBox: ''
					});
				}
				else {
					this.setState({email: {borderColor: "red"}});
				}
			}
			else {
				this.setState({adress: {borderColor: "red"}});
			}
		}
		else {
			this.setState({name: {borderColor: "red"}});
		}
	},
	render: function () {
		// console.log("state", this.state.basketId);
		var componentForm;
		if (this.state.statusSend === null || this.state.statusSend === 'error') {
			componentForm = <form>
				<h4 style={{textAlign: 'center'}}>Форма для заказа.</h4>
                <label htmlFor="name" className="nameLabel">Ф.И.О.*</label>
                  <input value={this.internalState.name} style={this.state.name} onChange={this.getInfo} id="name" type="text" name="name" placeholder="Введите Ваше имя..." />
                <label htmlFor="email" className="emailLabel">Email*</label>
                  <input value={this.internalState.email} style={this.state.email} onChange={this.getInfo} id="email" type="text" name="email" placeholder="Enter your email..." />
                  <label htmlFor="phone" className="emailLabel">Телефон*</label>
                  <input value={this.internalState.phone} onChange={this.getInfo} id="phone" type="text" name="email" placeholder="Введите Ваш номер телефона..." />
                  <label htmlFor="adress" className="messageLabel">Адрес*</label>
              		<textarea rows='2' value={this.internalState.adress} defaultValue={this.internalState.adress} style={this.state.adress} onChange={this.getInfo} id="adress" name="adress" placeholder="Укажите Ваш точный адрес, индекс..."/>
                <label htmlFor="message" className="messageLabel">Комментарий</label>
                  <textarea rows='5' value={this.internalState.message} defaultValue={this.internalState.message} style={this.state.message} onChange={this.getInfo} id="message" name="message" placeholder="Комментарий к заказу..."/>
                <input className="contactButton" onClick={this.sendInfo} type="button" value="Отправить" />
                <p style={{fontSize: '14px',
    fontWeight: 700}}>* - поля обязательны для заполнения!</p>
            </form>
		}
		else if (this.state.statusSend === 'saved') {
			componentForm = <div className='beforeForms'>
								<h4>Заказ отправлен</h4>
								<button onClick={this.openForm}>Создать новую заявку</button>
							</div>;
		}
		return (
			<div className='formBox contact-us'>
				<div className='contact-form'>
					<form>
				<h4 style={{textAlign: 'center'}}>Форма для заказа.</h4>
                <label htmlFor="name" className="nameLabel">Ф.И.О.*</label>
                  <input value={this.internalState.name} style={this.state.name} onChange={this.getInfo} id="name" type="text" name="name" placeholder="Введите Ваше имя..." />
                <label htmlFor="email" className="emailLabel">Email*</label>
                  <input value={this.internalState.email} style={this.state.email} onChange={this.getInfo} id="email" type="text" name="email" placeholder="Enter your email..." />
                  <label htmlFor="phone" className="emailLabel">Телефон*</label>
                  <input value={this.internalState.phone} onChange={this.getInfo} id="phone" type="text" name="email" placeholder="Введите Ваш номер телефона..." />
                  <label htmlFor="adress" className="messageLabel">Адрес*</label>
              		<textarea rows='2' value={this.internalState.adress} defaultValue={this.internalState.adress} style={this.state.adress} onChange={this.getInfo} id="adress" name="adress" placeholder="Укажите Ваш точный адрес, индекс..."/>
                <label htmlFor="message" className="messageLabel">Комментарий</label>
                  <textarea rows='5' value={this.internalState.message} defaultValue={this.internalState.message} style={this.state.message} onChange={this.getInfo} id="message" name="message" placeholder="Комментарий к заказу..."/>
                <input className="contactButton" onClick={this.sendInfo} type="button" value="Отправить" />
                <p style={{fontSize: '14px',
    fontWeight: 700}}>* - поля обязательны для заполнения!</p>
            </form>
				</div>
			</div>
		);
	}
});

module.exports = ContactsForm;