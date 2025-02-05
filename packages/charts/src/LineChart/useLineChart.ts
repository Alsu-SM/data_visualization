import { useRef } from 'react';

import { drawLabels } from '../Utils/drawLabels';
import { UseLineChartProps } from './types';
import useHandlers from './useHandlers';
import { Theme, fillColors, lineColors } from '../Shared/constants';
import { drawBasicGrid } from '../Utils/drawGrid';
import { DataItem } from '../Shared/types';

function useLineChart({
	theme,
	ref,
	data,
	areDotsShown,
	areCornersSmoothed,
	isFieldFilled,
	accentColor,
	width,
	height,
}: UseLineChartProps) {
	const requestRef = useRef(0);
	const color = theme === Theme.light ? '#000' : '#ECECEC';

	const { drawYAxisData } =
		useHandlers(width, height);

	function drawGrid() {
		cancelAnimationFrame(requestRef.current);
		drawBasicGrid(ref, color, width, height);
	}

	function drawData(
		dataItem: DataItem[],
		minDate: Date,
		maxDate: Date,
		maxValue: number,
		lineColor: string,
		fillColor: string,
	) {
		const canvas = ref.current;
		const context = canvas?.getContext('2d');
		if (context) {
			drawYAxisData(
				dataItem,
				minDate,
				maxDate,
				context,
				isFieldFilled || false,
				areCornersSmoothed || false,
				fillColor,
				lineColor,
				areDotsShown || false,
				maxValue,
			);
		}
	}

	function drawChart() {
		drawGrid();

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
					drawData(data[i].data, minDate, maxDate, maxValue, lineColor, fillColor);
				}

				drawLabels(ref, maxValue, minDate, maxDate, color, width, height, accentColor);
		}
	}

	return { drawChart };
}

export default useLineChart;
