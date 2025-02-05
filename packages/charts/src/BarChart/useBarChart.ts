
import { drawLabels } from '../Utils/drawLabels';
import { Vertices } from '../LineChart/types';
import { CANVAS_PADDING, Theme, fillColors, lineColors } from '../Shared/constants';
import { DataItem } from '../Shared/types';
import { drawBasicGrid } from '../Utils/drawGrid';

import { UseBarChartProps } from './types';

function useBarChart({
	theme,
	areCornersSmoothed,
	isFieldFilled,
	ref,
	data,
	accentColor,
	width,
	height,
}: UseBarChartProps) {
	const color = theme === Theme.light ? '#000' : '#ECECEC';

	function drawData(
		ctx: CanvasRenderingContext2D,
		data: DataItem[],
		minDate: Date, 
		maxDate: Date,
		maxValue: number,
		lineColor: string,
		fillColor: string,
		itemsCount: number,
		itemNumber: number,
	) {
		const newLocal = height - CANVAS_PADDING * 2;
		const unitSize = (newLocal / maxValue) * 0.9;
		const unitSizeX = (width - CANVAS_PADDING * 2) / (+maxDate + 24*60*60*1000 - +minDate);
		const offsetSize = unitSizeX * 24*60*60*1000;

		const x0 = CANVAS_PADDING + unitSizeX*(+data[0].date)/(+maxDate);
		const y0 = height - CANVAS_PADDING - unitSize * data[0].value;

		const vertices: Vertices[] = [];
		vertices.push({ x: x0, y: y0 });

		for (let i = 1; i < data.length; i++) {
			const xi = CANVAS_PADDING + unitSizeX*(+data[i].date - +minDate);
			const yi = height - CANVAS_PADDING - unitSize * data[i].value;
			vertices.push({ x: xi, y: yi });
		}
		console.log(vertices)
		ctx.beginPath();

		for (let verticesItem of vertices) {
			const y = verticesItem.y;
			const barWidth = offsetSize;
			const x =
				verticesItem.x - barWidth + offsetSize - width * (itemsCount - itemNumber);
			const barHeight = height - CANVAS_PADDING - verticesItem.y;
			const borderRadius = areCornersSmoothed ? 15 : 0;
			ctx.roundRect(x, y, barWidth, barHeight, [borderRadius, borderRadius, 0, 0]);
		}
		ctx.strokeStyle = lineColor;
		ctx.fillStyle = fillColor;
		ctx.stroke();

		if (isFieldFilled) {
			ctx.fill();
		}
	}

	function drawChart() {
		drawBasicGrid(ref, color, width, height);

		const canvas = ref.current;
		const context = canvas?.getContext('2d');
		const allData = data.map(({ data }) => data.map((dataItem)=>dataItem)).flat();
		if (context&&allData.length>0) {
			const maxValue = Math.max(...allData.map(({value})=>value));
			const sortedData = allData.sort((a, b)=>+a.date-+b.date);
			const minDate = sortedData[0].date;
			const maxDate = new Date(Math.max(+sortedData[sortedData.length-1].date));
			
			for (let i = 0; i < data.length; i++) {
				const lineColor =
					data[i].lineColor || lineColors[i % lineColors.length];
				const fillColor =
					data[i].fillColor || fillColors[i % fillColors.length];
				drawData(
					context,
					data[i].data,
					minDate, 
					maxDate,
					maxValue,
					lineColor,
					fillColor,
					data.length,
					i + 1,
				);
			}

			drawLabels(ref, maxValue, minDate, maxDate, color, width, height, accentColor);
		}

		//
	}

	return { drawChart };
}

export default useBarChart;
