import { CSSProperties, ReactNode } from 'react';

export interface ButtonProps {
	children?: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
	color?: string;
	style?: CSSProperties;
	primary?: boolean;
}
