import React from 'react';

import { ChartSettings, ChartTypes } from '../../Shared/types';

export interface SelectorChartSettingsProps {
	chartType: ChartTypes;
	settings: ChartSettings;
	onSelect: (setting: ChartSettings) => void;
	className?: string;
	style?: React.CSSProperties;
}
