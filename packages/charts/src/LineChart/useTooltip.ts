// import { useMemo, useState } from 'react';

// import useTheme from '../../Facades/useTheme';
// import {
// 	CANVAS_HEIGHT,
// 	CANVAS_PADDING,
// 	CANVAS_WIDTH,
// 	Theme,
// } from '../../Shared/constants';

// import { AxisType, UseTooltipProps, Vertices } from './types';

// function useTooltip({
// 	ref,
// 	data,
// 	labels,
// 	xAxisType,
// 	yAxisType,
// }: UseTooltipProps) {
// 	const [linePosition, setLinePosition] = useState<number | null>(null);
// 	const [tooltipPosition, setTooltipPosition] = useState<Vertices | null>(null);
// 	const [currentData, setCurrentData] = useState({ label: '', data: null });
// 	const canvas = ref.current;
// 	const { theme } = useTheme();

// 	const lineColors =
// 		theme === Theme.light
// 			? ['#6666D8', '#15FFAB', '#6D96EE', '#CC9BF2']
// 			: ['#6666D8', '#15FFAB', '#6D96EE', '#CC9BF2'];
// 	const fillColors =
// 		theme === Theme.light
// 			? ['#8b8bed', '#179a7f', '#CC9BF2', '#3AF0B3']
// 			: ['#8b8bed', '#179a7f', '#CC9BF2', '#3AF0B3'];

// 	const categories: number[] = useMemo(() => {
// 		const size = xAxisType === AxisType.Category ? CANVAS_WIDTH : CANVAS_HEIGHT;
// 		const offsetSize = (size - CANVAS_PADDING * 2 - 1) / labels.length;
// 		const x0 = CANVAS_PADDING + offsetSize / 2;
// 		console.log(size, offsetSize);
// 		const y0 = CANVAS_HEIGHT - CANVAS_PADDING - offsetSize / 2;

// 		return labels.map((label, i) => {
// 			if (i === 0) {
// 				return xAxisType === AxisType.Category ? x0 : y0;
// 			}
// 			return xAxisType === AxisType.Category
// 				? x0 + offsetSize * i
// 				: y0 - offsetSize * i;
// 		});
// 	}, [xAxisType, labels]);

// 	function findClosest(arr: number[], value: number): number {
// 		return arr.reduce((prev, curr) =>
// 			Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev,
// 		);
// 	}

// 	function handleMouseMove(this: HTMLCanvasElement, evt: MouseEvent) {
// 		console.log('mm');
// 		const { offsetX, offsetY } = evt;
// 		if (xAxisType === AxisType.Category) {
// 			const closestX = findClosest(categories, offsetX);
// 			setLinePosition((closestX / CANVAS_WIDTH) * 100);
// 		}
// 		if (yAxisType === AxisType.Category) {
// 			const closestY = findClosest(categories, offsetY);
// 			console.log(offsetY, closestY);
// 			setLinePosition((closestY / CANVAS_HEIGHT) * 100);
// 		}
// 	}

// 	console.log(categories, linePosition);

// 	// function handleMouseLeave() {
// 	// 	setLinePosition(null);
// 	// }

// 	function addCanvasEventListener() {
// 		console.log(ref, data, labels, xAxisType, yAxisType);
// 		if (ref.current) {
// 			ref.current.addEventListener('mousemove', handleMouseMove);
// 			// canvas.addEventListener('mouseleave', handleMouseLeave);
// 		}
// 	}
// 	function removeCanvasEventListener() {
// 		if (ref.current) {
// 			ref.current.removeEventListener('mousemove', handleMouseMove);
// 			// canvas.removeEventListener('mouseleave', handleMouseLeave);
// 		}
// 	}

// 	return {
// 		linePosition,
// 		tooltipPosition,
// 		currentData,
// 		addCanvasEventListener,
// 		removeCanvasEventListener,
// 	};
// }

// export default useTooltip;
