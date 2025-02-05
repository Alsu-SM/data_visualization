import React, { MutableRefObject } from 'react';
import { ChartData } from '../Shared/types';
import { Theme } from '../Shared/constants';


export interface BarChartProps {
	theme?: Theme;
	title?: string;
	areCornersSmoothed?: boolean;
	isFieldFilled?: boolean;
	data: ChartData[];
	className?: string;
	accentColor?: string;
	style?: React.CSSProperties;
	width?: number;
	height?: number;
}

export interface UseBarChartProps {
	theme: Theme;
	areCornersSmoothed: boolean;
	isFieldFilled: boolean;
	ref: MutableRefObject<HTMLCanvasElement | null>;
	data: ChartData[];
	accentColor?: string;
	width: number;
	height: number;
}
