import CatalogBochka from '../../../assets/images/catalog/catalog__bochka.png'
import CatalogView from '../../../assets/images/catalog/catalog__view.svg'
 
const product = {
  img: CatalogBochka,
  discount: "55%",
  price: "15 000 000 uzs",
  oldPrice: "25 000 000 uzs",
  title: "Suv saqlash uchun bochka 200L",
  views: 100,
}

function CatalogCards() {
	return (
		<div className='catalog__wrapper__bottom'>
		{[...Array(9)].map((_, i) => (
    <div key={i} className='catalog__wrapper__bottom__row'>
      <img src={product.img} alt="" className='catalog__wrapper__bottom__row__img' />

      <div className='catalog__wrapper__bottom__row__col'>
        <p className="catalog__wrapper__bottom__row__col__text">{product.discount}</p>
        <p className="catalog__wrapper__bottom__row__col__text__1">{product.price}</p>
      </div>

      <p className="catalog__wrapper__bottom__row__text__1">{product.oldPrice}</p>
      <p className="catalog__wrapper__bottom__row__text__2">{product.title}</p>

      <span className="catalog__wrapper__bottom__row__span">
        <img src={CatalogView} alt="img" /> {product.views}
      </span>
    </div>
))}
		</div>
	)
}

export default CatalogCards
