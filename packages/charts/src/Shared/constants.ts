import { CartesianCoordinateData } from './types';

export enum Language {
	en = 'en',
	ru = 'ru',
}

export enum Theme {
	light = 'light',
	dark = 'dark',
}
export enum SettingsParams {
	animation = 'animation',
	language = 'language',
	theme = 'theme',
}

export const CANVAS_PADDING: number = 30;
export const CANVAS_WIDTH: number = 600;
export const CANVAS_HEIGHT: number = 150;

export const lineColors = [
	'rgba(139, 139, 273, 1)',
	'rgba(21, 255, 171, 1)',
	'rgba(204, 155, 242, 1)',
	'#CC9BF2',
];

export const fillColors = [
	'rgba(139, 139, 273, 0.3)',
	'rgba(21, 255, 171, 0.3)',
	'rgba(204, 155, 242, 0.3)',
	'#3AF0B3',
];

export const data1: number[][] = [
	[170, 80, 94, 138, 70, 87, 174],
	[50, 20, 5, 78, 0, 47, 54],
	[110, 30, 54, 18, 40, 57, 74],
];
export const data2: number[][] = [
	[2, 4, 6, 8, 6, 4, 2],
	[10, 2, 5, 1, 10, 2, 5],
	[1, 10, 13, 0, 16, 7, 1],
];

export const labels: string[] = [
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
	'Sun',
];

export const dataSetLength = 4;
export const cartesianCoordinatePoints1: CartesianCoordinateData[] = [
	{
		points: [
			[10, 40],
			[30, 100],
			[40, 20],
			[90, 120],
			[190, 20],
			[250, 50],
		],
	},
	{
		points: [
			[10, 140],
			[30, 200],
			[40, 120],
			[90, 220],
			[150, 120],
			[220, 350],
		],
	},
];
export const cartesianCoordinatePoints2: CartesianCoordinateData[] = [
	{
		points: [
			[10, 40],
			[30, 100],
			[40, 20],
			[90, 120],
		],
	},
];

export const cartesianCoordinatePointsSet = [
	[],
	[],
	cartesianCoordinatePoints1,
	cartesianCoordinatePoints2,
];
