import React, { MutableRefObject, ReactNode } from 'react';
import { Theme } from '../Shared/constants';
import { CartesianCoordinateData, ChartData } from '../Shared/types';

export interface LineChartProps {
	title?: string | ReactNode;
	theme?: Theme;
	isFieldFilled?: boolean;
	areCornersSmoothed?: boolean;
	areDotsShown?: boolean;
	className?: string;
	style?: React.CSSProperties;

	data: ChartData[];
	cartesianCoordinatePoints?: CartesianCoordinateData[];
	accentColor?: string;
	width?: number;
	height?: number;
}
export type Vertices = {
	x: number;
	y: number;
};

export type UseLineChartProps = {
	theme: Theme;
	ref: MutableRefObject<HTMLCanvasElement | null>;
	areDotsShown?: boolean;
	isFieldFilled?: boolean;
	areCornersSmoothed?: boolean;

	data: ChartData[];
	cartesianCoordinatePoints?: CartesianCoordinateData[];
	accentColor?: string;
	width: number;
	height: number;
};
export type UseTooltipProps = {
	ref: MutableRefObject<HTMLCanvasElement | null>;
	tooltipRef: MutableRefObject<HTMLDivElement | null>;
};
