import { subMonths, subWeeks, subYears } from 'date-fns';

import { TimeRange } from './types';

function getDateRange(timeRange: TimeRange): [Date, Date] {
	switch (timeRange) {
		case TimeRange.Year:
			return [subYears(new Date(), 1), new Date()];
		case TimeRange.Month:
			return [subMonths(new Date(), 1), new Date()];
		case TimeRange.TwoWeeks:
			return [subWeeks(new Date(), 2), new Date()];
		default:
			return [subWeeks(new Date(), 1), new Date()];
	}
}

export default getDateRange;
