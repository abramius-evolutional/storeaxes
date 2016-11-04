var AppDispatcher = require('../dispatcher/dispatcher.js');
var AppConstants = require('../constants/constants.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var state = {
	worksCard: [],
	works: [],
	service: null,
	sliders: null,
	address: null,
	images: [],
	productsItem: null,
	imagesProductItem: [],
	statusModal: false,
	modalCardProduct: {},
	id: null,
	statusSend: null,
	statusShowBasket: false,
	statusCreateBasket: false,
	basketId: null,
	basketIhfo: []
};

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);


  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function loadWorks (action) {
	state.worksCard = [];
	state.images = [];
	state.works = action.data.workItems;
	state.sliders = action.data.sliderItems;
	// console.log('store.js', state.works); 
	function compareNumeric(a, b) {
		  if (a.id > b.id) return 1;
		  if (a.id < b.id) return -1;
		}
	// state.works.sort(compareNumeric);
	for (var j = 0; j < action.data.workItems.length; j++) {
		for (var g = 0; g < state.works.length; g++) {
			if (action.data.workItems[j].id === state.works[g].id) {
				var prise = state.works[g].prise;
			}
		}
		var objWorksCard = {
			url: action.data.workItems[j].url[0],
			description: action.data.workItems[j].description,
			id: action.data.workItems[j].id,
			title: action.data.workItems[j].title,
			prise: prise
		};
		state.worksCard.push(objWorksCard);
	}
	state.service = action.data.serviceItems;
	state.address = action.data.contactInfo;
	// console.log('store.js', state.works); 
	// substring(0, 100) + '...';
	var phone;
	if (state.address.phone.substring(0, 1) === '+') {
		phone = state.address.phone.substring(0, 2) + ' ' 
		+ state.address.phone.substring(2, 5) + ' '
		+ state.address.phone.substring(5, 8) + ' '
		+ state.address.phone.substring(8, 10) + ' '
		+ state.address.phone.substring(10, 12);
	}
	else if (state.address.phone.substring(0, 1) === '8') {
		phone = state.address.phone.substring(0, 1) + ' ' 
		+ state.address.phone.substring(1, 4) + ' '
		+ state.address.phone.substring(4, 7) + ' '
		+ state.address.phone.substring(7, 9) + ' '
		+ state.address.phone.substring(9, 11);
	}
	// console.log('store.js', phone); 
	state.address.phone = phone;
	for (var i = 0; i < action.data.sliderItems.length; i++) {
		var objSliders = {
			original: action.data.sliderItems[i].url,
		    thumbnail: action.data.sliderItems[i].url,
		    originalClass: 'featured-slide',
		    thumbnailClass: 'featured-thumb',
		    description: action.data.sliderItems[i].description
		};
		state.images.push(objSliders);  
	}
	// console.log('store.js', state.worksCard, state.works); 
};

function loadWorksErr () {
	console.log("Error");
};

function setStatusModal (action) {
	state.statusModal = action.status;
};

function getCardModalProduct (action) {
	var itemId = state.sliders[action.index].id;
	for (var i = 0; i < state.works.length; i++) {
		if (state.sliders[action.index].id == itemId) {
			state.modalCardProduct = {
				id: state.sliders[action.index].id,
				url: state.sliders[action.index].url,
				title: state.sliders[action.index].title,
				prise: state.works[i].prise
			}
		}
	} 
};

function getInfoProdictsItem (action) {
	state.id = action.id;
	// console.log('store.js', action.id);
};

function getStatusSend(action) {
	// console.log('store.js', action.data);
	var date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
            // console.log('Store.js', date.toUTCString());
    var optionsData = {
        expires: date.toUTCString(),
        path: '/'
    };
	setCookie('idBasket', null, optionsData);
	state.statusSend = action.data.status;
	state.statusShowBasket = false;
	state.basketIhfo = [];
};

function getStatusErrorSend(action) {
	state.statusSend = 'error';
};

function openForms() {
	state.statusSend = null;
};

function openBasket() {
	state.statusShowBasket = true;
};

function closeBasket() {
	state.statusShowBasket = false;
};

function getIdBasket(action) {
	var date = new Date(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
            // console.log('Store.js', date.toUTCString());
    var optionsData = {
        expires: date.toUTCString(),
        path: '/'
    };
	setCookie('idBasket', action.id.basket_id, optionsData);
	state.basketId = action.id.basket_id;
};

function getInfoBasket(action) {
	state.basketIhfo = action.data;
};

function getCoockie(action) {
	for (var i = 0; i < action.data.length; i++) {
		// console.log('store.js', action.data[i].substring(1, 9));
		if (action.data[i].substring(1, 9) === 'idBasket') {
			// console.log('store.js', decodeURIComponent(action.data[i].substring(10, action.data[i].length)));
			if (decodeURIComponent(action.data[i].substring(10, action.data[i].length)) === 'null') {
				state.basketId = null;
			}
			else if(decodeURIComponent(action.data[i].substring(10, action.data[i].length)) !== 'null') {
				state.basketId = decodeURIComponent(action.data[i].substring(10, action.data[i].length));
			}
		}
		// decodeURIComponent(data.name.substring(10, data.name.length + 1));
	}
};

var CHANGE_EVENT = 'change';

var AppStore = assign({}, EventEmitter.prototype, {
	getState: function() {
		return state;
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    route: function(actionType) {
    	switch (actionType) {
    		case AppConstants.UPDATE_DATA_SUCCESS:
    		return loadWorks;
    		case AppConstants.UPDATE_DATA_ERROR:
    		return loadWorksErr;
    		case AppConstants.GET_STATUS_MODAL:
    		return setStatusModal;
    		case AppConstants.GET_PRODUCTS_ITEM:
    		return getInfoProdictsItem;
    		case AppConstants.GET_CARD_MODAL_PRODUCTS:
    		return getCardModalProduct;
    		case AppConstants.GET_STATUS_SUCCESS_SEND:
    		return getStatusSend;
    		case AppConstants.GET_STATUS_ERROR_SEND:
    		return getStatusErrorSend;
    		case AppConstants.OPEN_FORMS:
    		return openForms;
    		case AppConstants.OPEN_BASKET:
    		return openBasket;
    		case AppConstants.CLOSE_BASKET:
    		return closeBasket;
    		case AppConstants.GET_ID_BASKET:
    		return getIdBasket;
    		case AppConstants.GET_INFO_BASKET:
    		return getInfoBasket;
    		case AppConstants.GET_COOCKIE:
    		return getCoockie;
    	}
    }
});

AppDispatcher.register(function(payload){
	var func = AppStore.route(payload.action.actionType);
	if (func != null) {
		func(payload.action);
		AppStore.emitChange();
	};
	return true;
});

module.exports = AppStore;