function convertRgbToHex(c: string): string {
	const match = c.match(/\d+/g);
	console.log(match);
	return match
		? '#' +
				match
					.slice(0, 3)
					.map((x: string, i) => {
						console.log(x, i);
						return (+x).toString(16).padStart(2, '0');
					})
					.join(``)
		: '';
}

export default convertRgbToHex;
