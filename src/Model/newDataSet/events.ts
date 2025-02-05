import { createEvent } from 'effector';

import {
	ChartSettings,
	ChartTypes,
	Icons,
	TimeRange,
} from '../../Shared/types';

export const setSelectedIconEvent = createEvent<Icons>();
export const setSelectedChartTypeEvent = createEvent<ChartTypes>();
export const setMetricNameEvent = createEvent<string>();
export const setMetricUnitEvent = createEvent<string>();
export const setTimeRangeEvent = createEvent<TimeRange>();
export const setSelectedColorEvent = createEvent<string>();
export const setChartSettingsEvent = createEvent<ChartSettings>();
