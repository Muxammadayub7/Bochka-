import '../../../assets/style/Catalog.css'

import CatalogFlag from '../../../assets/images/catalog/catalog__flagg.png'
import CatalogLogo from '../../../assets/images/catalog/catalog__logo.png'
import CatalogArrowRight from '../../../assets/images/catalog/catalog__arrow__right.svg'
import CatalogCards from '../CatalogCards/CatalogCards'
import CatalogCardsActive from '../CatalogCardsActive/CatalogCardsActive'
import CatalogImg1 from '../../../assets/images/catalog/catalog__img__1.svg'
import CatalogImg2 from '../../../assets/images/catalog/catalog__img__2.svg'
import CatalogImg3 from '../../../assets/images/catalog/catalog__img__3.svg'
import CatalogImg4 from '../../../assets/images/catalog/catalog__img__4.svg'
import CatalogBochkaMobile from '../../../assets/images/catalog/catalog__bachok__mobile.png'
import CatalogView from '../../../assets/images/catalog/catalog__view.svg'
function Catalog() {
	// const [activeTab, setActiveTab] = useState(0);

	// const toggle = (index) => {
	//   setActiveTab(activeTab === index ? null : index);
	// };

	return (
		<section className='catalog'>
			<div className='catalog__container container'>
				<div className='catalog__inner'>
					<div className='catalog__wrapper__left'>
						<h3 className='catalog__wrapper__title'>Katalog</h3>
						<CatalogCardsActive />
					</div>
					<div className='catalog__wrapper__center'>
						<div className='catalog__wrapper__relativ'>
							<h3 className='catalog__wrapper__relativ__title'>
								Qurilish uchun eng sifatli bochkalar faqat bizda{' '}
							</h3>
							<img
								src={CatalogFlag}
								alt=''
								className='catalog__wrapper__flag'
							/>
							<img
								src={CatalogLogo}
								alt=''
								className='catalog__wrapper__logo'
							/>
						</div>
						<div className='catalog__arrows__text'>
							<div className='catalog__arrows__text__flex'>
								<p className='catalog__arrows__text__flex__text'>Asosiy</p>
								<img src={CatalogArrowRight} alt='' />
								<p className='catalog__arrows__text__flex__text'>
									Ishlatilish maqsadi
								</p>
								<img src={CatalogArrowRight} alt='' />
								<p className='catalog__arrows__text__flex__text'>
									Bochka mebellari
								</p>
								<img src={CatalogArrowRight} alt='' />
								<p className='catalog__arrows__text__flex__text__1'>Uy uchun</p>
							</div>
							<h2 className='catalog__arrows__text__title'>
								Eng yangi tovarlar
							</h2>
						</div>
						<CatalogCards />
					</div>
					<div className='catalog__wrapper__rigth'>
						<div className='catalog__wrapper__rigth__row'>
							<div className='catalog__wrapper__rigth__row__col'>
								<h3 className='catalog__wrapper__rigth__row__col__title'>
									Brand qidirish
								</h3>
								<div className='catalog__wrapper__rigth__row__col__images'>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg1} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg2} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg3} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg1} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg2} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg4} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg3} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg1} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg2} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg3} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg1} alt='Img' />
									</div>
									<div className='catalog__wrapper__rigth__row__col__images__img'>
										<img src={CatalogImg2} alt='Img' />
									</div>
								</div>
							</div>
							<div className='catalog__wrapper__rigth__row__flex'>
								<h3 className='catalog__wrapper__rigth__row__flex__title'>Ommabop tovarlar</h3>
								<div className='catalog__wrapper__rigth__row__flex__inner__flex'>
									<img src={CatalogBochkaMobile} alt='img' className='catalog__wrapper__rigth__row__flex__inner__flex__img' />
										<div>
											<p className='catalog__wrapper__rigth__row__flex__text'>1 500 000 uzs</p>
											<p className='catalog__wrapper__rigth__row__flex__span'>Suv saqlash uchun bochka 200L</p>
                    <p className="catalog__wrapper__rigth__row__flex__text__1"><img src={CatalogView} alt="" />100</p>
										</div>
								</div>
								<div className='catalog__wrapper__rigth__row__flex__inner__flex'>
									<img src={CatalogBochkaMobile} alt='img' className='catalog__wrapper__rigth__row__flex__inner__flex__img' />
										<div>
											<p className='catalog__wrapper__rigth__row__flex__text'><span className="catalog__wrapper__rigth__row__flex__55">55%</span> 1 500 000 uzs</p>
											<p className='catalog__wrapper__rigth__row__flex__span'>Suv saqlash uchun bochka 200L</p>
                    <p className="catalog__wrapper__rigth__row__flex__text__1"><img src={CatalogView} alt="" />100</p>
										</div>
								</div>
								<div className='catalog__wrapper__rigth__row__flex__inner__flex'>
									<img src={CatalogBochkaMobile} alt='img' className='catalog__wrapper__rigth__row__flex__inner__flex__img' />
										<div>
											<p className='catalog__wrapper__rigth__row__flex__text'><span className="catalog__wrapper__rigth__row__flex__55">55%</span> 1 500 000 uzs</p>
											<p className='catalog__wrapper__rigth__row__flex__span'>Suv saqlash uchun bochka 200L</p>
                    <p className="catalog__wrapper__rigth__row__flex__text__1"><img src={CatalogView} alt="" />100</p>
										</div>
								</div>
								<div className='catalog__wrapper__rigth__row__flex__inner__flex'>
									<img src={CatalogBochkaMobile} alt='img' className='catalog__wrapper__rigth__row__flex__inner__flex__img' />
										<div>
											<p className='catalog__wrapper__rigth__row__flex__text'><span className="catalog__wrapper__rigth__row__flex__55">55%</span> 1 500 000 uzs</p>
											<p className='catalog__wrapper__rigth__row__flex__span'>Suv saqlash uchun bochka 200L</p>
                    <p className="catalog__wrapper__rigth__row__flex__text__1"><img src={CatalogView} alt="" />100</p>
										</div>
								</div>
								<div className='catalog__wrapper__rigth__row__flex__inner__flex'>
									<img src={CatalogBochkaMobile} alt='img' className='catalog__wrapper__rigth__row__flex__inner__flex__img' />
										<div>
											<p className='catalog__wrapper__rigth__row__flex__text'><span className="catalog__wrapper__rigth__row__flex__55">55%</span> 1 500 000 uzs</p>
											<p className='catalog__wrapper__rigth__row__flex__span'>Suv saqlash uchun bochka 200L</p>
                    <p className="catalog__wrapper__rigth__row__flex__text__1"><img src={CatalogView} alt="" />100</p>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Catalog
