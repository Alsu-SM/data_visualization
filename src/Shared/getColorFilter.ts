import { hexToCSSFilter } from 'hex-to-css-filter';

import checkIsHex from './checkIsHex';
import convertRgbToHex from './converRgbToHex';

function getColorFilter(color: string) {
	const hexColor = color
		? checkIsHex(color)
			? color
			: convertRgbToHex(color)
		: '';
	const filter = hexColor ? hexToCSSFilter(hexColor).filter : '';

	return filter ? filter.slice(0, filter.length - 1) : '';
}

export default getColorFilter;
