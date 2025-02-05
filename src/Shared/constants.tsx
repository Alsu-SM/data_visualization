import { RgbColor } from '@uiw/react-color';

import Icon from '../Components/Icon';
import { SwitcherItem } from '../Components/Switcher/types';

import { ChartTypes, Icons, TimeRange } from './types';

export const chartTypes: SwitcherItem[] = [
	{ id: ChartTypes.Line, label: 'Line', icon: <Icon iconName={Icons.Atom} /> },
	{
		id: ChartTypes.Bar,
		label: 'Bar',
		icon: <Icon iconName={Icons.Sparkles} />,
	},
];

export const timeRanges: SwitcherItem[] = [
	{
		id: TimeRange.Week,
		label: 'Past week',
		icon: <Icon iconName={Icons.Atom} />,
	},
	{
		id: TimeRange.TwoWeeks,
		label: 'Past two weeks',
		icon: <Icon iconName={Icons.Sparkles} />,
	},
	{
		id: TimeRange.Month,
		label: 'Past month',
		icon: <Icon iconName={Icons.Sparkles} />,
	},
];

export const icons: Icons[] = [
	Icons.Atom,
	Icons.FileQuestion,
	Icons.GitBranch,
	Icons.Heart,
	Icons.ListPlus,
	Icons.PartyPopper,
	Icons.Plus,
	Icons.Pyramid,
	Icons.Rocket,
	Icons.Sparkles,
	Icons.Star,
	Icons.TestTube,
];

export const RGB_DEFAULT: RgbColor = {
	r: 0,
	g: 0,
	b: 0,
};
