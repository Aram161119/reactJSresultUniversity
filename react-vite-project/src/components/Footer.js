import { createElement } from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear(); //imperative

	//imperative
	return createElement(
		'footer',
		null,
		createElement(
			'p',
			null,
			createElement('strong', null, 'Current year: '),
			currentYear,
		),
	);
};

export default Footer;
