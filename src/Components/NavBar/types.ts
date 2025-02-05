import React, { ReactNode } from 'react';

export type NavigationItem = {
	key: string;
	displayName: string;
	href: string;
	isActive?: boolean;
	children?: NavigationItem[];
	icon?: ReactNode;
	renderFn?: (
		navigationItem: NavigationItem,
		rootStyles?: Record<string, string>,
	) => React.ReactNode;
};

export interface NavBarProps {
	navigationItems: NavigationItem[];
	className?: string;
	style?: React.CSSProperties;
}
