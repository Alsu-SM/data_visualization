import { CSSProperties, useMemo } from 'react';
import { BarChart, LineChart } from '@packages/charts';
import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
} from '@packages/charts/src/Shared/constants';
import clsx from 'clsx';
import {
	format,
	isSameMonth,
	isToday,
	isWithinInterval,
	startOfMonth,
} from 'date-fns';

import { ChartTypes, DataItem, Icons } from '../../Shared/types';
import Button from '../Button';
import Icon from '../Icon';

import { DataSetProps, DataSetView } from './types';

import styles from './DataSet.module.css';

function DataSet({
	id,
	onAddEntryButtonClick = () => {},
	name,
	chartType,
	iconName,
	chartSettings,
	units = '',
	data,
	lineColor,
	fillColor,
	className,
	style,
	minDate,
	maxDate,
	view = DataSetView.Card,
	width = CANVAS_WIDTH,
	height = CANVAS_HEIGHT,
}: DataSetProps) {
	function handleAddEntryButtonClick() {
		onAddEntryButtonClick(id);
	}
	const filteredData = useMemo(
		() =>
			data.filter(({ date }) =>
				isWithinInterval(date, { start: minDate, end: maxDate }),
			),
		[data, minDate, maxDate],
	);
	const chartData = useMemo(() => {
		if (filteredData.length < 60) {
			return filteredData;
		}
		const preparedData: DataItem[] = [];
		const sortedData = filteredData.sort((a, b) => +a.date - +b.date);
		let currentMonth = startOfMonth(sortedData[0].date);
		let iterator = 0;
		let dataSum = 0;
		let dataCount = 0;
		while (1) {
			const isTheSameMonth = isSameMonth(
				currentMonth,
				sortedData[iterator].date,
			);
			if (!isTheSameMonth) {
				preparedData.push({
					value: Math.floor(dataSum / dataCount),
					date: currentMonth,
				});
				currentMonth = startOfMonth(sortedData[iterator].date);
				dataSum = 0;
				dataCount = 0;
			}
			dataSum += sortedData[iterator].value;
			dataCount += 1;
			iterator += 1;
			if (iterator >= sortedData.length) {
				break;
			}
		}
		return preparedData;
	}, [filteredData]);

	const chart = useMemo(() => {
		switch (chartType) {
			case ChartTypes.Line:
				return (
					<LineChart
						data={[
							{
								data: chartData,
								lineColor: lineColor,
								fillColor: fillColor,
							},
						]}
						areCornersSmoothed={chartSettings.shouldSmoothLine}
						areDotsShown={chartSettings.shouldDrawLineDots}
						isFieldFilled={chartSettings.shouldFillLine}
						accentColor={lineColor}
						width={width}
						height={height}
					/>
				);
			case ChartTypes.Bar:
				return (
					<BarChart
						data={[
							{
								data: chartData,
								lineColor: lineColor,
								fillColor: fillColor,
							},
						]}
						isFieldFilled={chartSettings.shouldFillBars}
						areCornersSmoothed={chartSettings.shouldRoundBars}
						accentColor={lineColor}
						width={width}
						height={height}
					/>
				);
			default:
				return null;
		}
	}, [
		chartSettings,
		chartType,
		height,
		width,
		chartData,
		lineColor,
		fillColor,
	]);

	const todayValue = data.find(({ date }) => isToday(date));

	const todayMessage = (
		<>
			{todayValue ? (
				<span
					className={styles.today__highlight}
				>{`${todayValue.value} ${units}`}</span>
			) : (
				'No data yet'
			)}
			<span>{` today`}</span>
		</>
	);

	const rangeMessage =
		filteredData.length < 60 && filteredData.length > 0 ? (
			<span className={styles.range_value}>
				{format(filteredData[0].date, 'dd.MM.yy')} -{' '}
				{format(filteredData[filteredData.length - 1].date, 'dd.MM.yy')}
			</span>
		) : (
			<span className={styles.range_value}>avg by month</span>
		);

	return (
		<div
			className={clsx(styles.root, styles[view], className)}
			style={{ ...style, '--color': lineColor } as CSSProperties}
		>
			<div className={styles.header}>
				<div className={styles.left_group}>
					<Icon iconName={iconName} className={styles.icon} />
					<div className={styles.name}>{name}</div>
				</div>
				<div className={styles.right_group}>
					<Button
						className={styles.button}
						color={lineColor}
						onClick={handleAddEntryButtonClick}
					>
						<Icon iconName={Icons.Plus} className={styles.plus_icon} />
					</Button>
				</div>
			</div>
			<div className={styles.chart_wrapper}>{chart}</div>
			<div className={styles.message}>
				<div className={styles.today}>{todayMessage}</div>
				<div className={styles.range}>displayed {rangeMessage}</div>
			</div>
		</div>
	);
}

export default DataSet;
