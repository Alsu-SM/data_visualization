import { MutableRefObject } from 'react';

import {
	CANVAS_PADDING,
} from '../Shared/constants';

export function drawBasicGrid(
	ref: MutableRefObject<HTMLCanvasElement | null>,
	color: string,
	width: number,
	height: number,
) {
	const canvas = ref.current;
	const context = canvas?.getContext('2d');
	if (canvas && context) {
		context.clearRect(0, 0, width, height);
		canvas.width = width;
		canvas.height = height;
		context.beginPath();
		context.moveTo(CANVAS_PADDING, CANVAS_PADDING);
		context.lineTo(CANVAS_PADDING, height - CANVAS_PADDING);
		context.lineTo(width - CANVAS_PADDING, height - CANVAS_PADDING);
		context.strokeStyle = color;
		context.stroke();
		const h1 = 16;
		const h2 = height/150*4;
		const gridWidth = (width - CANVAS_PADDING*2) / h1;
		const strokeStyle = 'rgba(40, 40, 40, 1)'
		context.strokeStyle=strokeStyle;
		for(let i = 0; i < h2 - 1; i++)
		{
			context.moveTo(CANVAS_PADDING , height- CANVAS_PADDING - gridWidth*i)
			context.lineTo(width-CANVAS_PADDING, height- CANVAS_PADDING - gridWidth*i);
			context.stroke();
		}
		for(let i = 0; i < h1 +1; i++)
		{
			context.moveTo(CANVAS_PADDING + gridWidth*i , CANVAS_PADDING)
			context.lineTo(CANVAS_PADDING + gridWidth*i, height- CANVAS_PADDING);
			context.stroke();
		}
	}
}
