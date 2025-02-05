
export interface ChartData {
	data: DataItem[];
	lineColor?: string;
	fillColor?: string;
	areCornersSmoothed?: boolean;
	areDotsShown?: boolean;
	isAreaFilled?: boolean;
}

export interface CartesianCoordinateData {
	points: [number, number][];
	lineColor?: string;
	fillColor?: string;
	areCornersSmoothed?: boolean;
	areDotsShown?: boolean;
	isAreaFilled?: boolean;
}

export type DataItem = {
	date: Date;
	value: number;
};
