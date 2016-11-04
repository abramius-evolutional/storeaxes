var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var WorkItem = require('./itemWork.jsx');
var PortfolioItem = require('./portfolioItem.jsx');

var Work = React.createClass({
	getInitialState: function () {
		return {
			portfolioItems: AppStore.getState().works
		};
	},
	componentDidMount: function () {
		AppStore.addChangeListener(this._onChange);
	},
	componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
	_onChange: function () {
		this.setState({portfolioItems: AppStore.getState().worksCard});
	},
	render: function () {
		// console.log("itemWork.jsx", this.state.works);
		if (this.state.portfolioItems != null) {
			var works = this.state.portfolioItems.map(function(prop) {
				return (
					<PortfolioItem params={{ id: prop.id }} prop={prop} key={prop.id} />
				);
			})
		}
		else if (this.state.portfolioItems == null) {
			var works = null;
		}
		return (
			<div className="portfolio container">
	            <div className="portfolio-title">
	                <h3>Наша продукция</h3>
	            </div>
	            <div className="row">
	            	<ul className="portfolio-img">
	                  {works}
	                </ul>
	            </div>
	        </div>
		);
	}
});

module.exports = Work;