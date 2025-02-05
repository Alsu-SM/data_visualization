import { subYears } from 'date-fns';

import generateDataItems from '../../Shared/generateData';
import { ChartTypes, DataSet, Icons, TimeRange } from '../../Shared/types';

function generateData() {
	return generateDataItems(subYears(new Date(), 1), new Date(), 1, 60);
}
export const DATA_DEFAULT: DataSet[] = [
	{
		id: '1',
		name: 'Title',
		iconName: Icons.Sparkles,
		lineColor: 'rgba(255, 194, 103, 1)',
		fillColor: 'rgba(255, 194, 103, 0.1)',
		bgColor: 'rgba(255, 194, 103, 0.5)',
		units: 'km',
		data: generateData(),
		chartType: ChartTypes.Line,
		chartSettings: {
			shouldDrawLineDots: true,
			shouldFillLine: true,
			shouldSmoothLine: true,
		},
		timeRange: TimeRange.Month,
	},
	{
		id: '2',
		name: 'Title',
		iconName: Icons.PartyPopper,
		lineColor: 'rgba(200, 72, 220, 1)',
		fillColor: 'rgba(200, 72, 220, 0.1)',
		bgColor: 'rgba(200, 72, 220, 0.5)',
		units: 'kcal',
		data: generateData(),
		chartType: ChartTypes.Bar,
		chartSettings: {
			shouldDrawLineDots: true,
			shouldRoundBars: true,
			shouldFillBars: true,
		},
		timeRange: TimeRange.TwoWeeks,
	},
	{
		id: '3',
		name: 'Title',
		iconName: Icons.Rocket,
		lineColor: 'rgba(94, 173, 207, 1)',
		fillColor: 'rgba(94, 173, 207, 0.1)',
		bgColor: 'rgba(94, 173, 207, 0.5)',
		units: 'kcal',
		data: generateData(),
		chartType: ChartTypes.Line,
		chartSettings: {
			shouldFillLine: true,
		},
		timeRange: TimeRange.Week,
	},
	{
		id: '4',
		name: 'Title',
		iconName: Icons.Sparkles,
		lineColor: 'rgba(55, 255, 51, 1)',
		fillColor: 'rgba(55, 255, 51, 0.1)',
		bgColor: 'rgba(55, 255, 51, 0.5)',
		units: 'km',
		data: generateData(),
		chartType: ChartTypes.Line,
		chartSettings: {
			shouldDrawLineDots: true,
			shouldFillLine: true,
			shouldSmoothLine: true,
		},
		timeRange: TimeRange.Year,
	},
];
