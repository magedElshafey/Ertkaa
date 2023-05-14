import React, { useEffect } from 'react';
import AOS from 'aos';
import Nav from './Component/layout/navbar/Nav';
import { useTranslation } from 'react-i18next';
import Hero from './Component/Hero/Hero';
import Stats from './Component/stats/Stats';

const App = () => {
	const [t, i18n] = useTranslation();
	// handle animation
	useEffect(() => {
		AOS.init({
			offset: 0,
			duration: 1200,
		});
	}, []);
	// handle page direction
	useEffect(() => {
		document.documentElement.setAttribute('lang', i18n.language);
		if (i18n.language === 'ar') {
			document.getElementsByTagName('body')[0].style.direction = 'rtl';
		} else {
			document.getElementsByTagName('body')[0].style.direction = 'ltr';
		}
	}, [i18n.language]);
	return (
		<div>
			<Nav />
			<Hero />
			<Stats />
		</div>
	);
};

export default App;
