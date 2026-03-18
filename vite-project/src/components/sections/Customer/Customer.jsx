import '../../../assets/style/Customer.css'

import CustomerLogo from '../../../assets/images/customer/customer__logo.avif'
import CustomerImg1 from '../../../assets/images/customer/customer__img__1.avif'
import CustomerImg2 from '../../../assets/images/customer/customer__img__2.avif'
import CustomerImg3 from '../../../assets/images/customer/customer__img__3.avif'
import CustomerBochka from '../../../assets/images/customer/customer__bochka.avif'
import CustomerArrow from '../../../assets/images/customer/customer__arrow.svg'

import CatalogBochka from '../../../assets/images/catalog/catalog__bochka.avif'
import CatalogView from '../../../assets/images/catalog/catalog__view.svg'

const product = {
	img: CatalogBochka,
	discount: '55%',
	price: '15 000 000 uzs',
	oldPrice: '25 000 000 uzs',
	title: 'Suv saqlash uchun bochka 200L',
	views: 100,
}
function Customer() {
	return (
		<section className='customer'>
			<div className='customer__container container'>
				<div className='customer__inner'>
					<div className='customer__inner__left'>
						<h2 className='customer__inner__title'>Yetkazib berish</h2>
						<img src={CustomerLogo} alt='' />
					</div>
					<div className='customer__inner__center'>
						<h2 className='customer__inner__center__title'>
							Bizning mijozlarimiz
						</h2>
						<div className='customer__inner__center__wrapper'>
							<div className='customer__inner__center__row'>
								<div className='customer__inner__center__flex'>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg2} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
								</div>
							</div>
							<div className='customer__inner__center__row'>
								<div className='customer__inner__center__flex'>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg2} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
								</div>
							</div>
							<div className='customer__inner__center__row'>
								<div className='customer__inner__center__flex'>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg2} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
								</div>
							</div>
						</div>
						<div className='customer__inner__bottom'>
							<div className='customer__inner__bottom__flex'>
								<h2 className='customer__inner__bottom__flex__title'>
									Qurilish uchun eng sifatli bochkalar faqat bizda{' '}
								</h2>
								<p className='customer__inner__bottom__flex__text'>
									Aynan o’zingizga mos hajm va sifatdagi bochkalarni
									tanlashingiz mukin
								</p>
							</div>
							<img
								src={CustomerBochka}
								alt=''
								className='customer__inner__bottom__img'
							 />
						</div>
						<div className='customer__inner__company'>
							<div className='customer__inner__company__flex'>
								<h2 className='customer__inner__company__flex__title'>
									Sony kompaniya tovarlar
								</h2>
								<a href='' className='customer__inner__company__flex__text'>
									Hammasini ko’rish <img src={CustomerArrow} alt='' />
								</a>
							</div>
							<div className='catalog__wrapper__bottom'>
								{[...Array(3)].map((_, i) => (
									<div key={i} className='catalog__wrapper__bottom__row'>
										<img
											src={product.img}
											alt=''
											className='catalog__wrapper__bottom__row__img'
										/>

										<div className='catalog__wrapper__bottom__row__col'>
											<p className='catalog__wrapper__bottom__row__col__text'>
												{product.discount}
											</p>
											<p className='catalog__wrapper__bottom__row__col__text__1'>
												{product.price}
											</p>
										</div>

										<p className='catalog__wrapper__bottom__row__text__1'>
											{product.oldPrice}
										</p>
										<p className='catalog__wrapper__bottom__row__text__2'>
											{product.title}
										</p>

										<span className='catalog__wrapper__bottom__row__span'>
											<img src={CatalogView} alt='img' /> {product.views}
										</span>
									</div>
								))}
							</div>
						</div>
						<h2 className='customer__inner__center__title'>
							Bizning hamkorlarimiz
						</h2>
						<div className='customer__inner__center__wrapper'>
							<div className='customer__inner__center__row'>
								<div className='customer__inner__center__flex'>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg2} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
								</div>
							</div>
							<div className='customer__inner__center__row'>
								<div className='customer__inner__center__flex'>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg2} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
								</div>
							</div>
							<div className='customer__inner__center__row'>
								<div className='customer__inner__center__flex'>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg2} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg1} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
									<div className='customer__inner__center__images'>
										<img src={CustomerImg3} alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='customer__inner__right'>
						<h2 className='customer__inner__title'>Reklama</h2>
						<img src={CustomerLogo} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Customer
