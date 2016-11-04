var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var ServiceItem = require('./serviceItem.jsx');

var Service = React.createClass({
	getInitialState: function () {
		return {
			service: null,
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
		this.setState({
			service: AppStore.getState().service,
			address: AppStore.getState().address
		});
	},
	render: function () {
		var serviceNode, aboutContent = null;
		if (this.state.service != null) {
			serviceNode = this.state.service.map(function(prop) {
				return (
					<ServiceItem prop={prop} key={prop.id} />
				);
			})
		}
		if (this.state.address !== null) {
			aboutContent = <div className="about-us-text span12">
	                    <p>ОПЛАТА. Мы работаем только при полной предоплате заказа. В связи с нашей удаленностью от города оплата осуществляется только безналичным способом на банковскую карту Сбербанка России. Выбранный товар сначала добавляется в корзину,после чего заполняется форма. В ответ на указанную вами электронную почту мы отправляем номер карты и сумму заказа с учетом доставки. После оплаты сообщаем срок изготовления (если нет в наличии) и дату отправки вашего заказа. Оптовый заказ начинается от 10 изделий,цены и условия оплаты сообщаем по запросу.</p>
	                    <p>ДОСТАВКА. БЕСПЛАТНАЯ доставка во все регионы России осуществляется через отделения "Почта России". Посылки не теряются и доходят целыми! Время доставки около 7- 14 дней,зависит от удаленности региона. Доставка службой ЕМС-400р. Это более быстрый способ,до 5 дней. Доставка за рубеж оговаривается отдельно. Доставка транспортными компаниями так же сильно ограничена нашей удаленностью и подходит в основном оптовым покупателям, все условия оговариваются по факту. Время отправки всегда уточняется индивидуально,это зависит от очереди заказов.</p>
	                </div>
		}
		else if (this.state.service != null) {
			serviceNode = null;
		}
		return (
			<div className="what-we-do container">
	            <div className="row">
	            	{aboutContent}
	            	{serviceNode}
	            </div>
	        </div>
		);
	}
});


module.exports = Service;