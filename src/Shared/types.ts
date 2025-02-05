import { RgbColor } from '@uiw/react-color';

export enum ChartTypes {
	Line = 'line',
	Bar = 'bar',
	Git = 'git',
}

export enum Icons {
	Atom = 'Atom',
	GitBranch = 'GitBranch',
	Heart = 'Heart',
	PartyPopper = 'PartyPopper',
	Plus = 'Plus',
	Pyramid = 'Pyramid',
	Rocket = 'Rocket',
	Sparkles = 'Sparkles',
	Star = 'Star',
	TestTube = 'TestTube',
	FileQuestion = 'FileQuestion',
	ListPlus = 'ListPlus',
	ArrowLeft = 'ArrowLeft',
}

export type DataItem = {
	date: Date;
	value: number;
};

export enum ChartSettingsKeys {
	ShouldDrawLineDots = 'shouldDrawLineDots',
	ShouldSmoothLine = 'shouldSmoothLine',
	ShouldRoundBars = 'shouldRoundBars',
	ShouldFillLine = 'shouldFillLine',
	ShouldFillBars = 'shouldFillBars',
}
export interface ChartSettings {
	shouldDrawLineDots?: boolean;
	shouldSmoothLine?: boolean;
	shouldRoundBars?: boolean;
	shouldFillLine?: boolean;
	shouldFillBars?: boolean;
}

export interface DataSet {
	id: string;
	name: string;
	iconName: Icons;
	chartType: ChartTypes;
	chartSettings: ChartSettings;
	data: DataItem[];
	units?: string;
	goal?: number;
	lineColor?: string;
	fillColor?: string;
	bgColor?: string;
	rgb?: RgbColor;
	timeRange: TimeRange;
}

export enum TimeRange {
	Week = 'week',
	TwoWeeks = 'twoWeeks',
	Month = 'month',
	Year = 'year',
}
