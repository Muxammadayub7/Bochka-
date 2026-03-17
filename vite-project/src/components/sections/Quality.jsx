import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import '../../assets/style/Quality.css'
import QualityImg from '../../assets/images/quality/quality__img__1.png'
import QualityImg2 from '../../assets/images/quality/quality__img__2.png'
import QualityImgMobile from '../../assets/images/quality/quality__img__1__mobile.png'
import QualityImgMobile2 from '../../assets/images/quality/quality__img__2__mobile.png'

function Quality() {
	return (
		<section className='quality'>
			<div className='quality__container container'>
				<Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className='mySwiper'
        >
				<SwiperSlide>
					<div className='quality__inner'>
						<div className='quality__row'>
							<h2 className='quality__title'>
								Qurilish uchun eng sifatli bochkalar faqat bizda
							</h2>
							<p className='quality__text'>
								Aynan o’zingizga mos hajm va sifatdagi bochkalarni tanlashingiz
								mukin
							</p>
							<button className='hero__btn'>Buyurtma berish</button>
						</div>
						<img src={QualityImg} alt='QualityImg' className='quality__img' />
            <img src={QualityImgMobile} alt="" className='quality__img__2' />
						<img
							src={QualityImg2}
							alt='QualityImg'
							className='quality__img__1'
						/>
            <img src={QualityImgMobile2} alt="" className='quality__img__3' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='quality__inner'>
						<div className='quality__row'>
							<h2 className='quality__title'>
								Qurilish uchun eng sifatli bochkalar faqat bizda
							</h2>
							<p className='quality__text'>
								Aynan o’zingizga mos hajm va sifatdagi bochkalarni tanlashingiz
								mukin
							</p>
							<button className='hero__btn'>Buyurtma berish</button>
						</div>
						<img src={QualityImg} alt='QualityImg' className='quality__img' />
            <img src={QualityImgMobile} alt="" className='quality__img__2' />
						<img
							src={QualityImg2}
							alt='QualityImg'
							className='quality__img__1'
						/>
            <img src={QualityImgMobile2} alt="" className='quality__img__3' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='quality__inner'>
						<div className='quality__row'>
							<h2 className='quality__title'>
								Qurilish uchun eng sifatli bochkalar faqat bizda
							</h2>
							<p className='quality__text'>
								Aynan o’zingizga mos hajm va sifatdagi bochkalarni tanlashingiz
								mukin
							</p>
							<button className='hero__btn'>Buyurtma berish</button>
						</div>
						<img src={QualityImg} alt='QualityImg' className='quality__img' />
            <img src={QualityImgMobile} alt="" className='quality__img__2' />
						<img
							src={QualityImg2}
							alt='QualityImg'
							className='quality__img__1'
						/>
            <img src={QualityImgMobile2} alt="" className='quality__img__3' />
					</div>
				</SwiperSlide>
        </Swiper>
			</div>
		</section>
	)
}

export default Quality
