import { ChangeEvent, useState } from 'react';
import { RgbaColor } from '@uiw/react-color';
import clsx from 'clsx';
import { useUnit } from 'effector-react';

import Button from '../../Components/Button';
import ColorPicker from '../../Components/ColorPicker';
import Icon from '../../Components/Icon';
import Check from '../../Components/Icon/Icons/Check';
import IconsSelector from '../../Components/IconsSelector';
import Input from '../../Components/Input';
import SelectorChartSettings from '../../Components/SelectorChartSettings';
import Sheet from '../../Components/Sheet';
import Switcher from '../../Components/Switcher';
import { addDataSetEvent } from '../../Model/data/events';
import {
	setChartSettingsEvent,
	setMetricNameEvent,
	setMetricUnitEvent,
	setSelectedChartTypeEvent,
	setSelectedColorEvent,
	setSelectedIconEvent,
	setTimeRangeEvent,
} from '../../Model/newDataSet/events';
import {
	$chartSettings,
	$metricName,
	$metricUnit,
	$selectedChartType,
	$selectedColor,
	$selectedIcon,
	$timeRange,
} from '../../Model/newDataSet/state';
import {
	setIsCreateDataSetModalOpenEvent,
	setOpenDataSetId,
} from '../../Model/ui/events';
import { $isCreateDataSetModalOpen } from '../../Model/ui/state';
import {
	chartTypes,
	icons,
	RGB_DEFAULT,
	timeRanges,
} from '../../Shared/constants';
import convertHexToRgb from '../../Shared/convertHexToRgb';
import generateId from '../../Shared/generateId';
import {
	ChartSettings,
	ChartTypes,
	DataSet,
	Icons,
	TimeRange,
} from '../../Shared/types';

import { SheetAddDataSetContainerProps } from './types';

import styles from './SheetAddDataSetContainer.module.css';

function SheetAddDataSetContainer({
	className,
}: SheetAddDataSetContainerProps) {
	const isShown = useUnit($isCreateDataSetModalOpen);
	const selectedIcon = useUnit($selectedIcon);
	const selectedChartType = useUnit($selectedChartType);
	const metricName = useUnit($metricName);
	const metricUnit = useUnit($metricUnit);
	const selectedTimeRange = useUnit($timeRange);
	const selectedColor = useUnit($selectedColor);
	const chartSettings = useUnit($chartSettings);

	const [isIconsSelectorOpen, setIsIconsSelectorOpen] =
		useState<boolean>(false);
	const [isIconsSelectorToBeClosed, setIsIconsSelectorToBeClosed] =
		useState<boolean>(false);

	const isConfirmDisabled = !metricName || !metricUnit;

	function handleClose() {
		setIsCreateDataSetModalOpenEvent(false);
	}
	function handleIconSelect(iconName: Icons) {
		setSelectedIconEvent(iconName);
		setIsIconsSelectorToBeClosed(true);
	}
	function handleLineChartSelect(chartType: string) {
		setSelectedChartTypeEvent(chartType as ChartTypes);
	}
	function handleMetricNameChange(event: ChangeEvent<HTMLInputElement>) {
		setMetricNameEvent(event.target.value);
	}
	function handleMetricUnitChange(event: ChangeEvent<HTMLInputElement>) {
		setMetricUnitEvent(event.target.value);
	}
	function handleTimeRangeChange(timeRange: string) {
		setTimeRangeEvent(timeRange as TimeRange);
	}
	function handleColorChange(color: string) {
		setSelectedColorEvent(color);
	}
	function handleSettingsSelect(settings: ChartSettings) {
		setChartSettingsEvent(settings);
	}

	function handleConfirm() {
		const rgba = convertHexToRgb(selectedColor);
		let lineColor = `rgba(64, 165, 228, 1)`;
		let fillColor = `rgba(64, 165, 228, 0.1)`;
		let bgColor = `rgba(64, 165, 228, 0.5)`;
		if (rgba) {
			lineColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 1)`;
			fillColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 0.1)`;
			bgColor = `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, 0.5)`;
		}
		const id = generateId();
		const newDataSet: DataSet = {
			id,
			name: metricName,
			iconName: selectedIcon,
			chartType: selectedChartType,
			chartSettings: chartSettings,
			data: [],
			units: metricUnit,
			lineColor,
			fillColor,
			bgColor,
			rgb: rgba ? rgba : RGB_DEFAULT,
			timeRange: selectedTimeRange,
		};
		addDataSetEvent(newDataSet);
		setOpenDataSetId(id);
		handleClose();
	}

	return (
		<Sheet className={clsx(styles.root, className)} isShown={isShown}>
			<div className={styles.title}>What do you want to track?</div>
			<button onClick={handleClose} className={styles.button_close}>
				<Icon iconName={Icons.ArrowLeft} className={styles.icon_close} />
			</button>
			<div className={styles.content}>
				<div className={styles.section}>
					<div className={styles.section_title}>Name *</div>
					<Input
						required
						placeholder="My new metric uwu"
						value={metricName}
						onChange={handleMetricNameChange}
					/>
				</div>
				<div className={styles.section}>
					<div className={styles.section_title}>Unit Name *</div>
					<Input
						required
						placeholder="Steps, hours, etc."
						value={metricUnit}
						onChange={handleMetricUnitChange}
					/>
				</div>
				<div className={styles.section}>
					<div className={styles.section_title}>Icon</div>
					<Button
						onClick={() => {
							setIsIconsSelectorOpen(true);
						}}
						className={styles.icon_select_button}
					>
						<Icon
							iconName={selectedIcon}
							className={styles.icon_select_button_icon}
						/>
					</Button>
					{isIconsSelectorOpen && (
						<IconsSelector
							isToBeClosed={isIconsSelectorToBeClosed}
							onSelect={handleIconSelect}
							iconNames={icons}
							onClose={() => {
								setIsIconsSelectorOpen(false);
								setIsIconsSelectorToBeClosed(false);
							}}
						/>
					)}
				</div>
				<div className={styles.section}>
					<div className={styles.section_title}>Color</div>
					<ColorPicker
						selectedColor={selectedColor}
						onSelect={handleColorChange}
					/>
				</div>
				<div className={styles.section}>
					<div className={styles.section_title}>Chart Type</div>
					<Switcher
						items={chartTypes}
						selectedItemId={selectedChartType}
						onSelect={handleLineChartSelect}
					/>
				</div>
				<div className={styles.section}>
					<div className={styles.section_title}>Chart Settings</div>
					<SelectorChartSettings
						chartType={selectedChartType}
						settings={chartSettings}
						onSelect={handleSettingsSelect}
					/>
				</div>
				<div className={styles.section}>
					<div className={styles.section_title}>Time Range</div>
					<Switcher
						items={timeRanges}
						selectedItemId={selectedTimeRange}
						onSelect={handleTimeRangeChange}
					/>
				</div>
			</div>
			<Button
				className={styles.confirm_button}
				onClick={handleConfirm}
				disabled={isConfirmDisabled}
			>
				<Check className={styles.confirm_button_icon} />
			</Button>
		</Sheet>
	);
}

export default SheetAddDataSetContainer;
