import format from 'date-fns/format';
import { CANVAS_PADDING } from '../Shared/constants';
import { isSameDay } from 'date-fns/esm';
import { addDays, differenceInCalendarDays, isToday } from 'date-fns';

export function drawXAxisLabels(
	minDate: Date,
	maxDate: Date,
	context: CanvasRenderingContext2D,
	color: string,
	width: number,
	height: number,
	accentColor: string = '#40a5e4',
) {
	const unitSizeX =
		(width - CANVAS_PADDING * 2) / (+maxDate + 24 * 60 * 60 * 1000 - +minDate);
	const offset = unitSizeX * 24 * 60 * 60 * 1000;

	let currDate = minDate;
	let count = 0;

	const density = Math.abs(
		Math.round(differenceInCalendarDays(minDate, maxDate) / 7),
	);
	console.log(density);

	while (!isSameDay(currDate, addDays(maxDate, 1))) {
		if (count % density === 0) {
			const xi =
				CANVAS_PADDING + offset / 2 + unitSizeX * (+currDate - +minDate);

			context.textAlign = 'center';
			context.font = '14px Poppins';
			context.fillStyle = isToday(currDate) ? accentColor : color;
			context.fillText(
				format(currDate, 'dd.MM'),
				xi,
				height - CANVAS_PADDING + 16,
			);
		}

		count++;
		currDate = addDays(currDate, 1);
	}
}
