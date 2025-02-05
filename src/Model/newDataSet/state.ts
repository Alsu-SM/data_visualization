import { createStore } from 'effector';

import {
	ChartSettings,
	ChartTypes,
	Icons,
	TimeRange,
} from '../../Shared/types';

import {
	setChartSettingsEvent,
	setMetricNameEvent,
	setMetricUnitEvent,
	setSelectedChartTypeEvent,
	setSelectedColorEvent,
	setSelectedIconEvent,
	setTimeRangeEvent,
} from './events';

export const $selectedIcon = createStore<Icons>(Icons.FileQuestion).on(
	setSelectedIconEvent,
	(_, selectedIcon: Icons) => selectedIcon,
);

export const $selectedChartType = createStore<ChartTypes>(ChartTypes.Line).on(
	setSelectedChartTypeEvent,
	(_, selectedChartType: ChartTypes) => selectedChartType,
);

export const $metricName = createStore<string>('').on(
	setMetricNameEvent,
	(_, metricName: string) => metricName,
);

export const $metricUnit = createStore<string>('').on(
	setMetricUnitEvent,
	(_, metricUnit: string) => metricUnit,
);

export const $timeRange = createStore<TimeRange>(TimeRange.Week).on(
	setTimeRangeEvent,
	(_, timeRange: TimeRange) => timeRange,
);

export const $selectedColor = createStore<string>('#40a5e4').on(
	setSelectedColorEvent,
	(_, selectedColor: string) => selectedColor,
);

export const $chartSettings = createStore<ChartSettings>({}).on(
	setChartSettingsEvent,
	(_, chartSettings: ChartSettings) => chartSettings,
);
