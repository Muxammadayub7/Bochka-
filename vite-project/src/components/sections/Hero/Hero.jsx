import '../../../assets/style/Hero.css'
import HeroLogo from '../../../assets/images/hero/hero__logo.svg'
import HeroSearch from '../../../assets/images/hero/hero__search.svg'
function Hero() {
	return (
		// hero start
		<section className='hero'>
			<div className='hero__container container'>
				<div className='hero__wrapper'>
					<img src={HeroLogo} alt='' className='hero__logo' />
					<div className='hero__row'>
						<input
							type='text'
							placeholder='Maxsulotlarlarni qidirish'
							className='hero__row__input'
						/>
						<img src={HeroSearch} alt='' className='hero__row__img' />
					</div>
				</div>
				<div className='hero__wrapper__right'>
					<ul className='hero__list'>
						<li className='hero__item'>
							<a href='#' className='hero__link'>
								Biz haqimizda
							</a>
						</li>
						<li className=''>
							<a href='#' className='hero__link'>
								Qo‘llab-quvvatlash
							</a>
						</li>
						<li className=''>
							<a href='#' className='hero__link'>
								Maxfiylik{' '}
							</a>
						</li>
						<li className=''>
							<a href='#' className='hero__link'>
								Ijtimoiy tarmoqlar
							</a>
						</li>
					</ul>
					<button className='hero__btn'>Buyurtma berish</button>
				</div>
			</div>
		</section>
		// hero end
	)
}

export default Hero
