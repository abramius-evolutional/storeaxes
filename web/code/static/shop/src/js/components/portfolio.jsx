var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var PortfolioItem = require('./portfolioItem.jsx');
var TableProductItem = require('./tableProductItem.jsx');


var Portfolio = React.createClass({
	getInitialState: function () {
		return {
			portfolioItems: AppStore.getState().works,
			basketId: AppStore.getState().basketId
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
			portfolioItems: AppStore.getState().worksCard,
			basketId: AppStore.getState().basketId
		});
	},
	render: function () {

		if (this.state.portfolioItems == null) {
			var portfolioItemsNode = null;
		}
		else if (this.state.portfolioItems != null) {
			var basketId = this.state.basketId;
			var portfolioItemsNode = this.state.portfolioItems.map(function(prop) {
				return (
					<TableProductItem basketId={basketId} params={{ id: prop.id }} prop={prop} key={prop.id} />
				);
			})
		}
		return (
			<div className="portfolio portfolio-page container">
	            <div className="row">
	                <ul className="portfolioImg">
	                  {portfolioItemsNode}  
	                  {this.props.children}
	                  <div style={{clear: 'both'}}></div>
	                </ul>
	            </div>
	        </div>
		);
	}
});

module.exports = Portfolio;
