var React = require('react');
var AppActions = require('../action/actions.js');
var AppStore = require('../stores/store.js');
var ImageGallery = require('react-image-gallery');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ContactsForm = require('./contactForm.jsx');

var ProductsItem = React.createClass({
	mixins: [LinkedStateMixin],
	getInitialState: function () {
		return {
			isPlaying: true,
			slideInterval: 9000,
			showThumbnails: true,
			showIndex: false,
			showNav: true,
			showBullets: true,
			productItemInfo: AppStore.getState().works,
			id: AppStore.getState().id,
			statusCreateBasket: AppStore.getState().statusCreateBasket,
			basketId: AppStore.getState().basketId
		};
	},
	internalState: {
		indexItem: 0,
		title: null,
		description: null,
		prise: null
	},
	componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({
        	productItemInfo: AppStore.getState().works, id: AppStore.getState().id,
        	statusCreateBasket: AppStore.getState().statusCreateBasket,
        	basketId: AppStore.getState().basketId
        });
    },
	handleSlide: function(index) {
		console.log('Slid to ' + index);
	},
	getIndex: function (index) {
		this.internalState.indexItem = index;
	},
	getAddItemBasket: function () {
		console.log('productItem.jsx', this.state.statusCreateBasket, this.state.basketId);
		AppActions.getAddItemBasket({idItem: this.state.id, basket: this.state.basketId});
	},
	render: function () {
		document.title = 'топор, кованые изделия, ' + this.internalState.title + ', купить топор кованый ручной работы';
		var images = [];
		for (var j = 0; j < this.state.productItemInfo.length; j++) {
			// console.log('productItem.jsx', this.state.id);
			if (this.state.productItemInfo[j].id == this.state.id) {
				this.internalState.title = this.state.productItemInfo[j].title;
				this.internalState.description = this.state.productItemInfo[j].description;
				this.internalState.prise = this.state.productItemInfo[j].prise;
				for (var i = 0; i < this.state.productItemInfo[j].url.length; i++) {
					var objImg = {
						original: this.state.productItemInfo[j].url[i],
					    thumbnail: this.state.productItemInfo[j].url[i],
					    originalClass: 'featured-slide',
					    thumbnailClass: 'featured-thumb',
					    description: ""
					};
					images.push(objImg);
				}
			}
		}
		return (

      		<div>
      			<div className='slider sliderCorusel'>
      				<div className='sliderBox'>
      				<ImageGallery

			    	ref={(i) => this._imageGallery = i}
					items={images}
					lazyLoad={true}
					onSlide={this.getIndex}
					showBullets={this.state.showBullets}
					showThumbnails={this.state.showThumbnails}
					showIndex={this.state.showIndex}
					showNav={this.state.showNav}
					slideInterval={parseInt(this.state.slideInterval)}
					autoPlay={this.state.isPlaying}/>
	      			</div>
      			</div>
				<div>
					<div className="row">
						<div className="productDiscription">
		                    <h2>{this.internalState.title}</h2>
							<p style={{fontSize: '14px'}}>{this.internalState.description}</p>
							<h4>{this.internalState.prise + ' рублей'}</h4>
		                </div>
					</div>
					<div className="contact-us container">
						<div className="row">
							<div className="contact-form span7">
			                    <button className='addBasket' onClick={this.getAddItemBasket}>В корзину</button>
			                </div>
			                <div className='documentPasport'>
								<h4>Паспорт трёхслойного кованого топора ручной работы. Описание.</h4>
								<p>Топор, приобретённый Вами, является профессиональным инструментом высокого качества и предназначен для использования его только по прямому назначению: рубки дерева, сучков, кости животных, плотницких работ  в диапазоне температур от -50°(мороза)  до +50°С (тепла), редко нуждаясь в правке лезвия.</p>
								<ul>
									<li>Лезвие топора состоит из трёх слоёв металла, сваренных между собой  кузнечной сваркой. 
Клин (сердечник) лезвия топора выполняется из рессорной стали. 
Рубашка, - обклад, - из малоуглеродистой,мягкой стали .</li>
									<li>После нагрева заготовки до температуры начала плавления металлов сердечник и обклад будущего топора ударами кузнечного молота сваривают  между собой. Откованная заготовка необходимой формы передаётся слесарю, который обтачивает и  предварительно затачивает топор. Лезвие топора закаливают до твёрдости 60-62 единицы по шкале HRC. Обклад и обух имеют твёрдость 35-40 ед.HRC, что исключает  вероятность  раскола обуха под нагрузкой  даже при сильном морозе.</li>
									<li>Топорище изготавливают из твёрдых пород дерева. Защитную пропитку наносят в три слоя с обязательной промежуточной сушкой. Место насадки топора проваривается в масле. </li>
									<li>Отличительные особенности наших топоров - отсутствие отдачи в руку при работе. 
Исторически правильная форма и геометрия топора гасят при рубке пиковые ударные вибрации.</li>
									<li>Надёжная фиксация рукояти топора обеспечивается расклиниванием тремя  клиньями с посадкой на водостойкий монтажный клей.</li>
									<li>Чехол из натуральной кожи надёжно защитит вас и вашу экипировку от порезов.</li>
								</ul>
			                </div>
			                <div className='instruction'>
								<h4>Правила эксплуатации.</h4>
								<p>Топор полностью готов к работе и  достаточно заточен для резки и рубки материалов. Не проверяйте остроту лезвия пальцами!  
При необходимости рекомендуется подводка лезвия только алмазным бруском. В иных случаях рекомендуем обращаться в специализированные мастерские по заточке. </p>
								<p>Чтобы топор служил Вам долго, применяйте инструмент по прямому назначению (рубка), а также:</p>
								<ol>
									<li>Старайтесь не использовать топор в качестве монтировки или лома!</li>
									<li>Исключите намеренную рубку топором металлических предметов!</li>
									<li>Избегайте использования топора в качестве молотка и ударов по обуху.</li>
									<li>Сильный перегрев закалённого лезвия при переточке приводит к снижению его твёрдости.</li>
									<li>Метание топора в мишень может привести к разрушению рукояти. </li>
									<li>Берегите топорище от влаги для гарантии долгой и безупречной его работы.</li>
								</ol>
								<p>Выход инструмента из строя по пунктам  №№ 1 - 6 не является гарантийным. По характеру повреждений, при диагностике, специалист легко установит реальную  причину их появления.</p>
								<h4>Гарантия.</h4>
								<p>Наша мастерская дает полную гарантию на замену инструмента.если обнаружен производственный брак!</p>
			                </div>
						</div>
					</div>
				</div>
      		</div>
	    );
	}
});

module.exports = ProductsItem;