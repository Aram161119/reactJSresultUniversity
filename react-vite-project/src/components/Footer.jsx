const Footer = () => {
	const currentYear = new Date().getFullYear(); //imperative

	return (
		//declarative
		<footer>
			<p>
				<strong>Current year: </strong>
				{currentYear}
			</p>
		</footer>
	);
};

export default Footer;
