import { useState } from 'react';
import styles from './app.module.css';

const isValid = (str) => {
	return typeof str === 'string' && str.trim().length >= 3;
};

const getFormattedDateTime = () => {
	const now = new Date();

	const pad = (n) => n.toString().padStart(2, '0');

	const day = pad(now.getDate());
	const month = pad(now.getMonth() + 1);
	const year = now.getFullYear();

	const hours = pad(now.getHours());
	const minutes = pad(now.getMinutes());
	const seconds = pad(now.getSeconds());

	return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const isValueValid = isValid(value);

	const onInputButtonClick = () => {
		const promptValue = prompt('Set value');

		if (!isValid(promptValue)) {
			setValue(promptValue);
			setError('Введенное значение должно содержать минимум 3 символа');
			return;
		}

		error.length > 0 && setError('');
		setValue(promptValue);
	};

	const onAddButtonClick = () => {
		setValue('');
		const formattedDate = getFormattedDateTime();
		const updatedList = [
			...list,
			{
				id: ++list.length,
				value: value,
				createdAt: formattedDate,
			},
		];
		setList(updatedList);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: {'"'}
				<output className={styles.currentValue}>{value}</output>
				{'"'}
			</p>
			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>

				{list.length === 0 ? (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map(({ id, value, createdAt }) => {
							console.log('createdAt', createdAt);
							return (
								<li key={id} className={styles.listItem}>
									{value}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};
