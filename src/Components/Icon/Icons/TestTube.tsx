import { IconsProps } from '../types';

function TestTube({ className }: IconsProps) {
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
				d="M21 7L6.81997 21.18C6.28843 21.7057 5.57048 21.9997 4.82291 21.9978C4.07534 21.9959 3.35887 21.6983 2.82997 21.17C2.29993 20.6394 2.0022 19.92 2.0022 19.17C2.0022 18.42 2.29993 17.7006 2.82997 17.17L17 3M16 2L22 8M12 16H4"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default TestTube;
