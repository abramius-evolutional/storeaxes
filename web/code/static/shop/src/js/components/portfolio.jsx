var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var PortfolioItem = require('./portfolioItem.jsx');
var TableProductItem = require('./tableProductItem.jsx');


var Portfolio = React.createClass({
	getInitialState: function () {
		return {
			portfolioItems: AppStore.getState().works,
			basketId: AppStore.getState().basketId,
            categories: AppStore.getState().categories
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
			basketId: AppStore.getState().basketId,
            categories: AppStore.getState().categories
		});
	},
	render: function () {

		if (this.state.portfolioItems == null) {
			var portfolioItemsNode = null;
		}
		// else if (this.state.portfolioItems != null) {
		// 	var basketId = this.state.basketId;
		// 	var portfolioItemsNode = this.state.portfolioItems.map(function(prop) {
		// 		return (
		// 			<TableProductItem basketId={basketId} params={{ id: prop.id }} prop={prop} key={prop.id} />
		// 		);
		// 	})
		// }
        else if (this.state.portfolioItems != null) {
            var basketId = this.state.basketId;
            var portfolioItemsNode = this.state.categories.map((prop2, id) => {
                var statusChild = 'not';
                var works = this.state.portfolioItems.map(function(prop) {
                    if (prop.category === prop2) {
                        statusChild = 'yes';
                        return (
                            <TableProductItem basketId={basketId} params={{ id: prop.id }} prop={prop} key={prop.id} />
                        );
                    }
                    else {
                        return (
                            null
                        );
                    }

                })
                console.log("itemWork.jsx", works);
                if (statusChild === 'not') {
                    return(null)
                }
                return (
                    <div className="boxCategoryItem" key={id}>
                        <div className="categoryBox">
                            <h2>{prop2}</h2>
                        </div>
                        {works}
                        <div style={{clear: 'both', float: 'none', width: '100%', height: '0px', padding: '0px', margin: '0px', display: 'block'}}></div>
                    </div>
                )
            })
            var works = this.state.portfolioItems.map(function(prop) {
                return (
                    <PortfolioItem params={{ id: prop.id }} prop={prop} key={prop.id} />
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
