import { useEffect, useRef } from 'react';
import clsx from 'clsx';

import { BarChartProps } from './types';
import useBarChart from './useBarChart';

import styles from './BarChart.module.css';
import { CANVAS_HEIGHT, CANVAS_WIDTH, Theme } from '../Shared/constants';

function BarChart({
	theme = Theme.dark,
	areCornersSmoothed = false,
	isFieldFilled = false,
	data,
	className,
	style,
	accentColor = '#40a5e4',
	width = CANVAS_WIDTH,
	height = CANVAS_HEIGHT,
}: BarChartProps) {
	const ref = useRef<HTMLCanvasElement | null>(null);

	const { drawChart } = useBarChart({
		theme,
		areCornersSmoothed,
		isFieldFilled,
		ref,
		data,
		accentColor,
		width,
		height,
	});
	useEffect(() => {
		drawChart();
	}, [
		data,
		isFieldFilled,
		drawChart,
		areCornersSmoothed,
		width,
		height,
		accentColor,
		theme,
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

export default BarChart;
