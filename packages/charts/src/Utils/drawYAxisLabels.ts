import { CANVAS_HEIGHT, CANVAS_PADDING } from '../Shared/constants';

export function drawYAxisLabels(
	labels: string[],
	context: CanvasRenderingContext2D,
	color: string,
) {
	const labelsCount = labels.length;
	const categoryWidth = Math.floor(
		(CANVAS_HEIGHT - CANVAS_PADDING * 2) / labelsCount,
	);

	for (let i = 0; i < labelsCount; i++) {
		context.textAlign = 'center';
		context.fillStyle = color;
		context.font = '12px Poppins';
		context.fillText(
			labels[i],
			CANVAS_PADDING - 15,
			CANVAS_HEIGHT - CANVAS_PADDING - (i + 0.5) * categoryWidth,
		);
	}
}
