var AppDispatcher = require('../dispatcher/dispatcher.js');
var AppConstants = require('../constants/constants.js');
var Api = require('../api/api.js');

var AppActions = {
	addItem: function(item){
		AppDispatcher.handleViewAction({
			actionType:AppConstants.ADD_ITEM,
			item: item
		})
	},
	updateWorkItems: function(data) {
		// console.log('actions.js1212',data);
		$.ajax({
			url: '/api/content/',
			data: data,
			success: function(state) {
				// console.log('actions.js', state);
				AppDispatcher.handleViewAction({
					actionType:AppConstants.UPDATE_DATA_SUCCESS,
					data: state
				})
			},
			error: function(data) {
				AppDispatcher.handleViewAction({
					actionType:AppConstants.UPDATE_DATA_ERROR,
					data: "Err"
				})
			}
		})
	},
	getStatusModal: function (status) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_STATUS_MODAL,
			status: status
		})
	},
	getInfoProductsItem: function (id) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_PRODUCTS_ITEM,
			id: id
		})
	},
	getCardModalProduct: function  (index) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_CARD_MODAL_PRODUCTS,
			index: index
		})
	},
	setForms: function (data) {
		$.ajax({
			url: '/api/basket/make_order/',
			dataType: 'json',
			type: 'POST',
			data: data,
			success: function(state) {
				// console.log(state);
				AppDispatcher.handleViewAction({
					actionType:AppConstants.GET_STATUS_SUCCESS_SEND,
					data: state
				})
			}.bind(this),
			error: function(xhr, status, err) {
				var data = {
					status: status,
					err: err.toString()
				};
				AppDispatcher.handleViewAction({
					actionType:AppConstants.GET_STATUS_ERROR_SEND,
					data: data
				})
			}.bind(this)
		});
	},
	openForms: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.OPEN_FORMS
		})
	},
	openBasket: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.OPEN_BASKET
		})
	},
	closeBasket: function () {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.CLOSE_BASKET
		})
	},
	getAddItemBasket: function (state) {
		Api.getAddItem(state,
			function (data) {
				// console.log('actions.js', data);
				AppDispatcher.handleViewAction({
					actionType:AppConstants.GET_ID_BASKET,
					id:data
				});
				AppActions.getBasketInfo(data.basket_id);
			},
			function (data) {
				// body...
			});
	},
	getBasketInfo: function (state) {
		Api.getBasketInfo(state,
			function (data) {
				// console.log('actions.js>>>>>>>>>', data);
				AppDispatcher.handleViewAction({
					actionType:AppConstants.GET_INFO_BASKET,
					data:data
				});
			},
			function (data) {
				// body...
			});

	},
	getCoockie: function (data) {
		AppDispatcher.handleViewAction({
			actionType:AppConstants.GET_COOCKIE,
			data: data
		})
	},
	deleteBasketItem: function (state) {
		Api.deleteBasketItem(state,
			function (data) {
				// console.log('actions.js>>>', data);
				AppDispatcher.handleViewAction({
					actionType:AppConstants.GET_DATA_BEFORE_DELETE,
					data:data
				});
				AppActions.getBasketInfo(state.basket_id);
			},
			function (data) {
				// body...
			});
	},
	setCountItemBasket: function (state) {
		Api.setCountItem(state,
			function (data) {
				// console.log('actions.js>>>', data);
				// AppDispatcher.handleViewAction({
				// 	actionType:AppConstants.GET_DATA_BEFORE_DELETE,
				// 	data:data
				// });
				AppActions.getBasketInfo(state.basket_id);
			},
			function (data) {
				// body...
			});
	}
};

module.exports = AppActions;