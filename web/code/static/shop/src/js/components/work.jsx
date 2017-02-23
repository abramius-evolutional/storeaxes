var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var WorkItem = require('./itemWork.jsx');
var PortfolioItem = require('./portfolioItem.jsx');

var Work = React.createClass({
	getInitialState: function () {
		return {
			portfolioItems: AppStore.getState().works,
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
            categories: AppStore.getState().categories
		});
	},
	render: function () {
		// console.log("itemWork.jsx", this.state.portfolioItems);

		if (this.state.portfolioItems != null) {
		    var category = this.state.categories.map((prop2, id) => {
		        var statusChild = 'not';
                var works = this.state.portfolioItems.map(function(prop) {
                    if (prop.category === prop2) {
                        statusChild = 'yes';
                        return (
                            <PortfolioItem params={{ id: prop.id }} prop={prop} key={prop.id} />
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
                        {category}
	                  {/*{works}*/}
	                </ul>
	            </div>
	        </div>
		);
	}
});

module.exports = Work;
