var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;


var PortfolioItem = React.createClass({
    componentDidMount: function () {
        var id = this.props.params.id;
    },
    setIdItem: function () {
        var id = this.props.prop.id;
        AppActions.getInfoProductsItem(id);
    },
	render: function () {
        var description;
        if (this.props.prop.description.length > 80) {
            description = this.props.prop.description.substring(0, 80) + '...';
        }
        else if (this.props.prop.description.length <= 80) {
            description = this.props.prop.description + '...';
        }
        // console.log('portfolioItem.jsx', this.props.prop);
		return (
			<li style={{marginLeft: '15px', marginRight: '15px'}} data-id="p-1" data-type="web-design" className="span3">
                <div className="work">
                    <Link onClick={this.setIdItem} to={`/products/${this.props.prop.id}`} >
                        <img src={this.props.prop.url} alt="" />
                    </Link>
                    <span>{this.props.prop.title}</span>
                    <p>{description}</p>
                    <span>{this.props.prop.prise + ' '}<i className='fa fa-rub' ></i></span>
                </div>
            </li>
		);
	}
});

module.exports = PortfolioItem;
