import React from 'react';
import style from './portfolio.module.css';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper';
import { port } from '../../fakers/data';
const Portfolio = () => {
	const swiperOptions = {
		loop: true,
		centeredSlides: false,
		spaceBetween: 2,
		navigation: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			clickable: true,
		},
		breakpoints: {
			500: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			900: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 2,
			},
		},
	};
	const { t, i18n } = useTranslation();
	return (
		<div id='port' className='container-fluid pt-5 mt-5'>
			<h3 data-aos='fade-up' data-aos-delay='300' data-aos-offset='50' className='text-center mb-4 text-white fw-bolder fs-3'>
				{t('port')}
			</h3>
			<Swiper className='mySwiper w-100' modules={[Autoplay, Navigation]} data-aos='fade-up' data-aos-offset='200' {...swiperOptions}>
				{port.map((item, index) => (
					<SwiperSlide key={index} className= {`pt-5 ${style.slider}`}>
						<div className={style.imgContainer}>
							<img src={item.img} alt='portfolio/img' className={style.img} />
							<div className={style.borderLeft}></div>
							<div className={style.borderRight}></div>
						</div>
						<div className='mt-5 px-3'>
							<h4 className='fw-bolder text-white text-center mb-3'> {i18n.language === 'ar' ? item.arabicTitle : item.title}</h4>
							<p className='text-white-50 lh pb-3'>{i18n.language === 'ar' ? item.arabicDesc : item.desc}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Portfolio;
/*
    <div >
        {port.map((item, index) => (
          <div key={index} className="container">
            <div
              className={`p-0 col-12 col-md-5  ${style.mainContainer}`}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <img
                alt="portfolio/img"
                src={item.img}
                className="w-100 h-50 img-fluid"
              />
              <h4 className="fw-bolder  pt-5 text-center mb-3">
              
              </h4>
              
            </div>
          </div>
        ))}
      </div>
*/
