import { addDays, isSameDay } from 'date-fns';

import { DataItem } from './types';

export function getRandomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomBoolean() {
	return Math.random() < 0.5;
}

function generateDataItems(
	minDate: Date,
	maxDate: Date,
	minValue: number,
	maxValue: number,
): DataItem[] {
	const data: DataItem[] = [];
	let currentDate = minDate;

	while (!isSameDay(currentDate, addDays(maxDate, 1))) {
		const value = getRandomInt(minValue, maxValue);
		data.push({ date: currentDate, value });
		currentDate = addDays(currentDate, 1);
	}
	return data;
}

export default generateDataItems;
