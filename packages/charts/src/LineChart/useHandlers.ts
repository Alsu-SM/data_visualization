import { CANVAS_PADDING } from '../Shared/constants';
import { DataItem } from '../Shared/types';
import { Vertices } from './types';

function useHandlers(width: number, height: number) {
	function drawByArea(
		points: Vertices[],
		ctx: CanvasRenderingContext2D,
		areCornersSmoothed: boolean,
		fillColor: string,
	) {
		ctx.beginPath();
		const beginPoint = { x: points[0].x, y: height - CANVAS_PADDING };
		const endPoint = {
			x: points[points.length - 1].x,
			y: height - CANVAS_PADDING,
		};
		if (areCornersSmoothed) {
			ctx.moveTo(beginPoint.x, beginPoint.y);
			ctx.lineTo(points[0].x, points[0].y);
			for (let i = 0; i < points.length - 1; i++) {
				var x_mid = (points[i].x + points[i + 1].x) / 2;
				var y_mid = (points[i].y + points[i + 1].y) / 2;
				var cp_x1 = (x_mid + points[i].x) / 2;
				var cp_x2 = (x_mid + points[i + 1].x) / 2;
				ctx.quadraticCurveTo(cp_x1, points[i].y, x_mid, y_mid);
				ctx.quadraticCurveTo(
					cp_x2,
					points[i + 1].y,
					points[i + 1].x,
					points[i + 1].y,
				);
			}

			ctx.lineTo(endPoint.x, endPoint.y);
			ctx.lineTo(beginPoint.x, beginPoint.y);
			ctx.closePath();
			ctx.strokeStyle = fillColor;
			ctx.fillStyle = fillColor;
			ctx.fill();
		} else {
			ctx.moveTo(beginPoint.x, beginPoint.y);
			for (let i = 0; i < points.length; i++) {
				ctx.lineTo(points[i].x, points[i].y);
			}
			ctx.lineTo(endPoint.x, endPoint.y);
			ctx.lineTo(beginPoint.x, beginPoint.y);
			ctx.closePath();
			ctx.strokeStyle = fillColor;
			ctx.fillStyle = fillColor;
			ctx.fill();
		}

		ctx.lineWidth = 2;

		ctx.stroke();
	}
	function drawByPoints(
		points: Vertices[],
		ctx: CanvasRenderingContext2D,
		lineColor: string,
	) {
		ctx.beginPath();
		console.log(lineColor);
		ctx.lineCap = 'round';
		ctx.moveTo(points[0].x, points[0].y);
		for (let i = 1; i < points.length; i++) {
			ctx.lineTo(points[i].x, points[i].y);
		}
		ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
		ctx.strokeStyle = lineColor;
		ctx.lineWidth = 2;
		ctx.stroke();
	}

	function drawByCurves(
		points: Vertices[],
		ctx: CanvasRenderingContext2D,
		lineColor: string,
	) {
		ctx.beginPath();
		// ctx.setLineDash([]);
		ctx.moveTo(points[0].x, points[0].y);

		for (let i = 0; i < points.length - 1; i++) {
			var x_mid = (points[i].x + points[i + 1].x) / 2;
			var y_mid = (points[i].y + points[i + 1].y) / 2;
			var cp_x1 = (x_mid + points[i].x) / 2;
			var cp_x2 = (x_mid + points[i + 1].x) / 2;
			ctx.quadraticCurveTo(cp_x1, points[i].y, x_mid, y_mid);
			ctx.quadraticCurveTo(
				cp_x2,
				points[i + 1].y,
				points[i + 1].x,
				points[i + 1].y,
			);
		}
		ctx.strokeStyle = lineColor;
		ctx.lineWidth = 2;

		ctx.stroke();
	}

	function drawDots(
		points: Vertices[],
		context: CanvasRenderingContext2D,
		lineColor: string,
	) {
		for (let point of points) {
			context.beginPath();
			context.arc(point.x, point.y, 5, 0, Math.PI * 2);
			context.strokeStyle = lineColor;
			context.lineWidth = 2;
			context.closePath();
			context.stroke();
		}
	}

	function drawCartesianDataLabels(
		xMax: number,
		yMax: number,
		context: CanvasRenderingContext2D,
		color: string,
	) {
		const unitSizeX = ((width - CANVAS_PADDING * 2) / xMax) * 0.9;
		const unitSizeY = ((height - CANVAS_PADDING * 2) / yMax) * 0.9;
		for (let i = 1; i <= 5; i++) {
			const labelX = (i * xMax) / 5;
			const labelY = (i * yMax) / 5;
			context.beginPath();
			context.font = 'bold 10px Mulish';
			context.textAlign = 'center';
			context.strokeStyle = color;
			context.fillStyle = color;
			context.fillText(
				String(labelX),
				CANVAS_PADDING + unitSizeX * labelX,
				height - CANVAS_PADDING + 20,
			);
			context.fillText(
				String(labelY),
				CANVAS_PADDING - 20,
				height - CANVAS_PADDING - unitSizeY * labelY,
			);
		}
	}

	function drawYAxisData(
		data: DataItem[],
		minDate: Date,
		maxDate: Date,
		context: CanvasRenderingContext2D,
		isFieldFilled: boolean,
		areCornersSmoothed: boolean,
		fillColor: string,
		lineColor: string,
		areDotsShown: boolean,
		maxValue: number,
	) {
		const newLocal = height - CANVAS_PADDING * 2;
		const unitSize = (newLocal / maxValue) * 0.9;
		const unitSizeX =
			(width - CANVAS_PADDING * 2) /
			(+maxDate + 24 * 60 * 60 * 1000 - +minDate);
		const offsetSize = unitSizeX * 24 * 60 * 60 * 1000;
		const x0 =
			CANVAS_PADDING + offsetSize / 2 + (unitSizeX * +data[0].date) / +maxDate;
		const y0 = height - CANVAS_PADDING - unitSize * data[0].value;
		const vertices: Vertices[] = [];
		vertices.push({ x: x0, y: y0 });

		for (let i = 1; i < data.length; i++) {
			const xi =
				CANVAS_PADDING +
				offsetSize / 2 +
				unitSizeX * (+data[i].date - +minDate);
			const yi = height - CANVAS_PADDING - unitSize * data[i].value;
			console.log(+data[i].date, unitSizeX, maxDate, minDate);
			vertices.push({ x: xi, y: yi });
		}

		console.log(vertices);
		if (isFieldFilled) {
			drawByArea(vertices, context, areCornersSmoothed, fillColor);
		}
		if (areCornersSmoothed) {
			drawByCurves(vertices, context, lineColor);
		} else {
			drawByPoints(vertices, context, lineColor);
		}
		if (areDotsShown) {
			drawDots(vertices, context, lineColor);
		}
	}

	function drawXAxisData(
		data: number[],
		context: CanvasRenderingContext2D,
		isFieldFilled: boolean,
		areCornersSmoothed: boolean,
		fillColor: string,
		lineColor: string,
		areDotsShown: boolean,
		maxValue: number,
	) {
		const unitSize = ((width - CANVAS_PADDING * 2) / maxValue) * 0.9;
		const offsetSize = (height - CANVAS_PADDING * 2) / (data.length * 2);

		const y0 = height - CANVAS_PADDING - offsetSize;
		const x0 = CANVAS_PADDING + unitSize * data[0];
		const vertices: Vertices[] = [];
		vertices.push({ x: x0, y: y0 });

		for (let i = 1; i < data.length; i++) {
			const yi = height - CANVAS_PADDING - offsetSize * 2 * i;
			const xi = CANVAS_PADDING + unitSize * data[i];
			vertices.push({ x: xi, y: yi });
		}

		if (isFieldFilled) {
			drawByArea(vertices, context, areCornersSmoothed, fillColor);
		}
		if (areCornersSmoothed) {
			drawByCurves(vertices, context, lineColor);
		} else {
			drawByPoints(vertices, context, lineColor);
		}
		if (areDotsShown) {
			drawDots(vertices, context, lineColor);
		}
	}

	function drawCartesian(
		context: CanvasRenderingContext2D,
		points: [number, number][],
		isFieldFilled: boolean,
		areCornersSmoothed: boolean,
		fillColor: string,
		lineColor: string,
		areDotsShown: boolean,
		xMax: number,
		yMax: number,
	) {
		if (context) {
			const unitSizeX = ((width - CANVAS_PADDING * 2) / xMax) * 0.9;
			const unitSizeY = ((height - CANVAS_PADDING * 2) / yMax) * 0.9;
			const vertices: Vertices[] = [];
			for (let point of points) {
				const [pointX, pointY] = point;
				const x = CANVAS_PADDING + pointX * unitSizeX;
				const y = height - CANVAS_PADDING - pointY * unitSizeY;
				vertices.push({ x, y });
			}
			if (isFieldFilled) {
				drawByArea(vertices, context, areCornersSmoothed, fillColor);
			}
			if (areCornersSmoothed) {
				drawByCurves(vertices, context, lineColor);
			} else {
				drawByPoints(vertices, context, lineColor);
			}
			if (areDotsShown) {
				drawDots(vertices, context, lineColor);
			}
		}
	}

	return {
		drawXAxisData,
		drawYAxisData,
		drawCartesian,
		drawCartesianDataLabels,
	};
}

export default useHandlers;
