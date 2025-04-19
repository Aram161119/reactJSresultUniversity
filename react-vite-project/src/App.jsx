import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	const handleBack = () => setActiveIndex((prev) => prev - 1);
	const handleForward = () => setActiveIndex((prev) => prev + 1);
	const handleRestart = () => setActiveIndex(0);
	const handleSelectStep = (index) => setActiveIndex(index);

	const getClassName = (index) => {
		if (index === activeIndex) return styles.active;
		if (index < activeIndex) return styles.done;
		return ''; // index > activeIndex
	};
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>

				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>

					<ul className={styles['steps-list']}>
						{steps.map((step, index) => {
							const className = `${styles['steps-item']} ${getClassName(index)}`;

							return (
								<li key={step.id} className={className}>
									<button
										className={styles['steps-item-button']}
										onClick={() => handleSelectStep(index)}
									>
										{index + 1}
									</button>
									{step.title}
								</li>
							);
						})}
					</ul>

					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handleBack}
							disabled={isFirstStep}
						>
							Назад
						</button>

						<button
							className={styles.button}
							onClick={isLastStep ? handleRestart : handleForward}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
