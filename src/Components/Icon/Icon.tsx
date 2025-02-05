import * as IconsList from './Icons';
import { IconProps, IconType } from './types';

function Icon({ iconName, className }: IconProps) {
	const IconElement: IconType | null =
		(IconsList as Record<string, IconType>)[iconName] || IconsList.FileQuestion;

	return <IconElement className={className} />;
}

export default Icon;
