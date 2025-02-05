import { useMemo } from 'react';
import clsx from 'clsx';

import {
	ChartSettings,
	ChartSettingsKeys,
	ChartTypes,
} from '../../Shared/types';
import Button from '../Button';

import { SelectorChartSettingsProps } from './types';

import styles from './SelectorChartSettings.module.css';

function SelectorChartSettings({
	chartType,
	settings,
	onSelect,
	className,
	style,
}: SelectorChartSettingsProps) {
	function handleSelect(key: ChartSettingsKeys) {
		return () => {
			const newSettings = { ...settings };
			newSettings[key] = !newSettings[key];
			onSelect(newSettings);
		};
	}
	const buttons = useMemo(() => {
		switch (chartType) {
			case ChartTypes.Line:
				return (
					<div className={styles.buttons}>
						<Button
							className={clsx(styles.button, {
								[styles.button__active]: settings.shouldDrawLineDots,
							})}
							onClick={handleSelect(ChartSettingsKeys.ShouldDrawLineDots)}
						>
							Show dots
						</Button>
						<Button
							className={clsx(styles.button, {
								[styles.button__active]: settings.shouldSmoothLine,
							})}
							onClick={handleSelect(ChartSettingsKeys.ShouldSmoothLine)}
						>
							Smoothen line
						</Button>
						<Button
							className={clsx(styles.button, {
								[styles.button__active]: settings.shouldFillLine,
							})}
							onClick={handleSelect(ChartSettingsKeys.ShouldFillLine)}
						>
							Fill area
						</Button>
					</div>
				);
			case ChartTypes.Bar:
				return (
					<div className={styles.buttons}>
						<Button
							className={clsx(styles.button, {
								[styles.button__active]: settings.shouldRoundBars,
							})}
							onClick={handleSelect(ChartSettingsKeys.ShouldRoundBars)}
						>
							Round bar
						</Button>
						<Button
							className={clsx(styles.button, {
								[styles.button__active]: settings.shouldFillBars,
							})}
							onClick={handleSelect(ChartSettingsKeys.ShouldFillBars)}
						>
							Fill area
						</Button>
					</div>
				);
			default:
				return <></>;
		}
	}, [chartType, settings]);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{buttons}
		</div>
	);
}

export default SelectorChartSettings;
