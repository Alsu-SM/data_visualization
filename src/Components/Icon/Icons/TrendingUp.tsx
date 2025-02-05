import { IconsProps } from '../types';

function TrendingUp({ className }: IconsProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M22 7L13.5 15.5L8.5 10.5L2 17M22 7H16M22 7V13"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default TrendingUp;
