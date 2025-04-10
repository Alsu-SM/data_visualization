import { IconsProps } from '../types';

function Rocket({ className }: IconsProps) {
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
				d="M12 15L9 12M12 15C13.3968 14.4687 14.7369 13.7987 16 13M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13M9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13M9 12L4 12C4 12 4.55 8.97002 6 8.00002C7.62 6.92002 11 8.00002 11 8.00002M4.5 16.5001C3 17.7601 2.5 21.5001 2.5 21.5001C2.5 21.5001 6.24 21.0001 7.5 19.5001C8.21 18.6601 8.2 17.3701 7.41 16.5901C7.02131 16.2191 6.50929 16.0047 5.97223 15.9881C5.43516 15.9715 4.91088 16.1538 4.5 16.5001Z"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Rocket;
