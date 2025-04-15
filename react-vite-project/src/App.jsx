import { useState } from 'react';
import ReactLogo from './assets/react.svg?react';
import viteLogo from '/vite.svg';
import './App.css';
import Footer from './components/Footer';

export const App = () => {
	const [count, setCount] = useState(0); // imperative

	return (
		//declarative
		<>
			<div>
				<a href="https://vite.dev" rel="noreferrer" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" rel="noreferrer" target="_blank">
					<ReactLogo className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				{/*
					This arrow function is a small imperative element.
					It specifies what to do when clicked: increment the value of count.
				 */}
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>

			<Footer />
		</>
	);
};
