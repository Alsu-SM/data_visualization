import React from 'react';

export interface ColorPickerProps {
	selectedColor: string;
	onSelect: (color: string) => void;
	className?: string;
	style?: React.CSSProperties;
}
