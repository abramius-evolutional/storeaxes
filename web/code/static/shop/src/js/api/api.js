

var Api = {
	urlAddItem: {
		root: '/api/basket/add_item/'
	},
	urlGetInfoBasket: {
		root: '/api/basket/items/'
	},
	urlDeleteBasketItem: {
		root: '/api/basket/delete_item/'
	},
	urlSetCountItem: {
		root: '/api/basket/set_items_count/'
	},
	getRequestAddItemBasket: function (type ,url, state, success, error) {
		$.ajax({
			url: url,
			type: type,
			data: state,
			success: function(data) {
				success(data);
			},
			error: function(er, rr, ro) {
				console.log(er, rr, ro);
			}
		})
	},
	getRequestCountItemBasket: function (type ,url, state, success, error) {
		$.ajax({
			url: url,
			type: type,
			data: state,
			success: function(data) {
				success(data);
			},
			error: function(er, rr, ro) {
				console.log(er, rr, ro);
			}
		})
	},
	getAddItem: function (state, success, error) {
		if (state.basket === null) {
			var data = {
				item_id: state.idItem
			};
		}
		else if (state.basket !== null) {
			var data = {
				item_id: state.idItem,
				basket_id: state.basket
			};
		}
		this.getRequestAddItemBasket('POST' ,this.urlAddItem.root, data, success, error);
		// console.log('api.js', state);
	},
	getBasketInfo: function (state, success, error) {
		var data = {
			basket_id: state
		};
		// console.log('api.js', data);
		this.getRequestAddItemBasket('GET' ,this.urlGetInfoBasket.root, data, success, error);
	},
	deleteBasketItem: function (state, success, error) {
		this.getRequestAddItemBasket('POST' ,this.urlDeleteBasketItem.root, state, success, error);
	},
	setCountItem: function (state, success, error) {
		this.getRequestCountItemBasket('POST' ,this.urlSetCountItem.root, state, success, error);
	}
};

module.exports = Api;