import { useState, createElement, Fragment } from 'react';
import ReactLogo from './assets/react.svg?react';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './components/Footer';

export const App = () => {
	const [count, setCount] = useState(0); // imperative

	// imperative
	createElement(
		Fragment,
		null,
		createElement(
			'div',
			null,
			createElement(
				'a',
				{
					href: 'https://vite.dev',
					rel: 'noreferrer',
					target: '_blank',
				},
				createElement('img', {
					src: viteLogo,
					className: 'logo',
					alt: 'Vite logo',
				}),
			),
			createElement(
				'a',
				{
					href: 'https://react.dev',
					rel: 'noreferrer',
					target: '_blank',
				},
				createElement(ReactLogo, {
					className: 'logo react',
					alt: 'React logo',
				}),
			),
		),
		createElement('h1', null, 'Vite + React'),
		createElement(
			'div',
			{
				className: 'card',
			},
			createElement(
				'button',
				{
					onClick: () => setCount((count) => count + 1),
				},
				'count is ',
				count,
			),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.jsx'),
				' and save to test HMR',
			),
		),
		createElement(
			'p',
			{
				className: 'read-the-docs',
			},
			'Click on the Vite and React logos to learn more',
		),
		createElement(Footer, null),
	);
};
