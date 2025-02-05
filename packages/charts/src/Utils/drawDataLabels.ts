import {
	CANVAS_PADDING,
} from '../Shared/constants';

export function drawYAxisDataLabels(
	maxValue: number,
	context: CanvasRenderingContext2D,
	color: string,
	height: number,
) {
	const unitSize = ((height - CANVAS_PADDING * 2) / maxValue) * 0.9;

	for (let i = 1; i <= 5; i++) {
		const label = ((i * maxValue) / 5);
		context.beginPath();
		context.font = '13px Poppins';
		context.textAlign = 'center';
		context.fillStyle = color;
		context.fillText(
			String(Math.round(label)),
			CANVAS_PADDING - 20,
			height - CANVAS_PADDING - unitSize * label,
		);
	}
}
