import React from 'react';

import { DataSet } from '../../Shared/types';

export interface DataSetProps extends Omit<DataSet, 'timeRange'> {
	minDate: Date;
	maxDate: Date;
	view?: DataSetView;
	onAddEntryButtonClick?: (id: string) => void;
	className?: string;
	style?: React.CSSProperties;
	width?: number;
	height?: number;
}

export enum DataSetView {
	Card = 'card',
	Inline = 'inline',
}
