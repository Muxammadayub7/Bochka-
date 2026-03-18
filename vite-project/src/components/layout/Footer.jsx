import React from 'react'
import '../../assets/style/Footer.css'
import FooterLogo from '../../assets/images/footer/footer__logo.svg'
import {
	FaInstagram,
	FaTelegram,
	FaYoutube,
	FaLinkedin,
	FaFacebook,
} from 'react-icons/fa'

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<div className='footer__inner'>
					<div className='footer__col'>
						<img src={FooterLogo} alt='bochka.uz' className='footer__logo' />
						<p className='footer__col__text'>
							Bizning xizmatimiz orqali siz istalgan turdagi mahsulotlarni
							topishingiz, narxlarni solishtirishingiz va eng qulay taklifni
							tanlashingiz mumkin
						</p>
					</div>

					<div className='footer__inner__flex'>
						<div className='footer__inner__row'>
							<p className='footer__inner__row__text'>Xaridorlarga</p>
							<ul className='footer__inner__row__list'>
								<li>
									<a href='#' className='footer__inner__row__list__link'>
										Mahsulotni qanday tanlash kerak
									</a>
								</li>
								<li>
									<a href='#' className='footer__inner__row__list__link'>
										To‘lov va yetkazib berish
									</a>
								</li>
								<li>
									<a href='#' className='footer__inner__row__list__link'>
										Fikr-mulohaza
									</a>
								</li>
								<li>
									<a href='#' className='footer__inner__row__list__link'>
										Xizmat haqida
									</a>
								</li>
								<li>
									<a href='#' className='footer__inner__row__list__link'>
										Qaytish
									</a>
								</li>
							</ul>
						</div>

						<div className='footer__wrapper'>
							<div className='footer__wrapper__row'>
								<p className='footer__wrapper__row__text'>Hamkorlik</p>
								<ul className='footer__wrapper__row__list'>
									<li className='footer__wrapper__row__list__item'>
										Buyurtma topshirish punktini oching
									</li>
								</ul>
							</div>
							<div className='footer__wrapper__row'>
								<p className='footer__wrapper__row__text'>Sotuvchilar</p>
								<ul className='footer__wrapper__row__list'>
									<li className='footer__wrapper__row__list__item'>
										Hamkorlar uchun sayt
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='footer__row'>
						<div className='footer__row__col'>
							<p className='footer__row__col__text'>Ijtimoiy tarmoqlar</p>
							<div className='footer__row__col__links'>
								<a href='#' className='footer__row__col__links__link'>
									<FaInstagram />
								</a>
								<a href='#' className='footer__row__col__links__link'>
									<FaTelegram />
								</a>
								<a href='#' className='footer__row__col__links__link'>
									<FaYoutube />
								</a>
								<a href='#' className='footer__row__col__links__link'>
									<FaLinkedin />
								</a>
								<a href='#' className='footer__row__col__links__link'>
									<FaFacebook />
								</a>
							</div>
						</div>

						<div className='footer__row__col'>
							<span className='footer__row__col__span'>E-mail</span>
							<a
								href='mailto:neosim@gmail.com'
								className='footer__row__col__link'
							>
								neosim@gmail.com
							</a>
						</div>

						<div className='footer__row__col'>
							<span className='footer__row__col__span'>Telefon raqam</span>
							<a href='tel:+998712000000' className='footer__row__col__link'>
								+998 (71) 200-00-00
							</a>
						</div>

						<div className='footer__row__col'>
							<span className='footer__row__col__span'>Manzil</span>
							<p className='footer__row__col__link'>
								Tashkent Uzbekistan, Islom Karimov 18/1
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='footer__bottom'>
				<p className='footer__bottom__text'>
					Bochka.uz 2025. Barcha huquqlar himoyalangan.
				</p>
				<p className='footer__bottom__text'>
					Designed by <span style={{ color: '#fff' }}>SIDQ Agency</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
