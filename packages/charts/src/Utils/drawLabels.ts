import { MutableRefObject } from 'react';
import { drawXAxisLabels } from './drawXAxisLabels';
import { drawYAxisDataLabels } from './drawDataLabels';


export function drawLabels(
	ref: MutableRefObject<HTMLCanvasElement | null>,
	maxValue: number,
	minDate: Date,
	maxDate: Date,
	color: string,
	width: number,
	height: number,
	accentColor: string = '#40a5e4'
) {
	const canvas = ref.current;
	const context = canvas?.getContext('2d');

	if (canvas && context) {
		drawXAxisLabels(minDate, maxDate, context, color, width, height, accentColor);
		drawYAxisDataLabels(maxValue, context, color, height);
	}
}
