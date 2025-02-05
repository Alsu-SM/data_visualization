import React, { ReactNode } from 'react';

export interface SwitcherProps {
	items: SwitcherItem[];
	selectedItemId: string;
	onSelect: (id: string) => void;
	className?: string;
	style?: React.CSSProperties;
}

export interface SwitcherItem {
	id: string;
	label: string;
	icon?: ReactNode;
}
