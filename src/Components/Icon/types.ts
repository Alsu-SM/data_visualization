import { Icons } from '../../Shared/types';

export interface IconsProps {
	className?: string;
}
export interface IconProps {
	iconName: Icons;
	className?: string;
}

export type IconType = (props: IconsProps) => JSX.Element;
