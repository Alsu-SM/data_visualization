import { IconsProps } from '../types';

function FileQuestion({ className }: IconsProps) {
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
				d="M10 10.3C10.2 9.90004 10.5 9.50004 10.9 9.30004C11.3141 9.06061 11.7976 8.96975 12.2704 9.04249C12.7432 9.11523 13.177 9.3472 13.5 9.70004C13.8 10.1 14 10.5 14 11C14 12.3 12 13 12 13M12 17H12.01M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default FileQuestion;
