import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import { LineChartProps } from './types';
import useLineChart from './useLineChart';

import styles from './LineChart.module.css';
import { CANVAS_HEIGHT, CANVAS_WIDTH, Theme } from '../Shared/constants';

function LineChart({
	theme = Theme.dark,
	title,
	data,
	cartesianCoordinatePoints,
	className,
	style,
	isFieldFilled,
	areCornersSmoothed,
	areDotsShown,
	accentColor = '#40a5e4',
	width = CANVAS_WIDTH,
	height = CANVAS_HEIGHT,
}: LineChartProps) {
	const ref = useRef<HTMLCanvasElement | null>(null);

	const { drawChart } = useLineChart({
		theme,
		ref,
		data,
		areDotsShown,
		isFieldFilled,
		areCornersSmoothed,
		cartesianCoordinatePoints,
		accentColor,
		width,
		height,
	});

	useEffect(() => {
		drawChart();
	}, [
		data,
		areDotsShown,
		width,
		height,
		isFieldFilled,
		accentColor,
		areCornersSmoothed,
		theme,
		drawChart,
	]);

	return (
		<div className={clsx(styles.root, className, 'chart')} style={style}>
			<div className={styles.canvas_wrapper}>
				<canvas
					ref={ref}
					className={clsx(styles.canvas, 'canvas', {
						canvas__light: theme === Theme.light,
						canvas__dark: theme === Theme.dark,
					})}
					width={CANVAS_WIDTH}
					height={CANVAS_HEIGHT}
				></canvas>
			</div>
		</div>
	);
}

export default LineChart;
