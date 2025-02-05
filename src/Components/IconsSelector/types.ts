import React from 'react';

import { Icons } from '../../Shared/types';

export interface IconsSelectorProps {
	isToBeClosed: boolean;
	iconNames: Icons[];
	onSelect: (name: Icons) => void;
	onClose: () => void;
	className?: string;
	style?: React.CSSProperties;
}
