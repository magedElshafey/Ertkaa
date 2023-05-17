import React from 'react'
import style from './statistics.module.css'
import { useTranslation } from 'react-i18next'
import { stats } from '../../fakers/data';
const Statistics = () => {
  const [t , i18n] = useTranslation() ; 
  return (
		<div id='stats' className='container pt-5 mt-5'>
			<h3 data-aos='zoom-in' data-aos-delay='400' className='text-white fs-2 fw-bolder mb-0 text-center'>
				{t('res')}
			</h3>
			<div className='d-flex justify-content-center gap-5 flex-wrap pt-5'>
				{stats.map((item, index) => (
					<div data-aos='zoom-in' data-aos-delay={item.delay} key={index} className={`d-flex justify-content-center align-items-center py-3 ${style.mainCard}`}>
						<div className='d-flex flex-column align-items-center'>
							<h2 className={`${style.num} mb-0 fs-1 fw-bolder`}>{item.num}</h2>
							<p className='fw-bolder text-black-50'>{i18n.language === 'ar' ? item.ArabicTitle : item.title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}

export default Statistics
