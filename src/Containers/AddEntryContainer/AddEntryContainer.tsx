import { ChangeEvent, CSSProperties, useEffect, useState } from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useUnit } from 'effector-react';

import blob from '../../Assets/blob.png';
import Button from '../../Components/Button';
import Icon from '../../Components/Icon';
import Calendar from '../../Components/Icon/Icons/Calendar';
import Check from '../../Components/Icon/Icons/Check';
import Close from '../../Components/Icon/Icons/Close';
import Input from '../../Components/Input';
import ModalDatePicker from '../../Components/ModalDatePicker';
import Sheet from '../../Components/Sheet';
import { addEntryEvent } from '../../Model/data/events';
import {
	setIsAddEntryModalOpenEvent,
	setIsEditEntryModalOpenEvent,
} from '../../Model/ui/events';
import {
	$dataToEditOptions,
	$isAddEntryModalOpen,
	$isEditEntryModalOpen,
	$openDataSet,
	$openDataSetId,
} from '../../Model/ui/state';
import getColorFilter from '../../Shared/getColorFilter';

import { AddEntryContainerProps } from './types';

import styles from './AddEntryContainer.module.css';

function AddEntryContainer({ className }: AddEntryContainerProps) {
	const [calendarData, setCalendarData] = useState<{
		date: Date;
		isOpen: boolean;
	}>({
		date: new Date(),
		isOpen: false,
	});
	const [newValue, setValue] = useState<string>('');

	const currentDataSetId = useUnit($openDataSetId);

	const isAddEntryModalOpen = useUnit($isAddEntryModalOpen);
	const isEditEntryModalOpen = useUnit($isEditEntryModalOpen);

	const { value, date } = useUnit($dataToEditOptions);

	const { lineColor, bgColor, name, iconName } = useUnit($openDataSet) || {};
	const filter = getColorFilter(lineColor || '');

	function handleClose() {
		if (isAddEntryModalOpen) {
			setIsAddEntryModalOpenEvent(false);
		}
		if (isEditEntryModalOpen) {
			setIsEditEntryModalOpenEvent(false);
		}
	}
	function handleDatePickerChange(value: Date) {
		setCalendarData({ ...calendarData, date: value });
	}
	function handleDatePickerClose() {
		setCalendarData({ ...calendarData, isOpen: false });
	}
	function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
		console.log(event);
		setValue(event.target.value);
	}
	function handleConfirm() {
		addEntryEvent({
			id: currentDataSetId || '',
			value: Number(newValue),
			date: calendarData.date,
		});
		setValue('');
		setCalendarData({
			date: new Date(),
			isOpen: false,
		});
		handleClose();
	}

	const isConfirmDisabled = !newValue || !calendarData.date;
	const title = isAddEntryModalOpen ? 'Add new entry' : 'Edit entry';

	useEffect(() => {
		if (isEditEntryModalOpen) {
			setValue(String(value));
			setCalendarData({ isOpen: false, date });
		}
	}, [isEditEntryModalOpen, value, date]);

	return (
		<Sheet
			className={clsx(className)}
			isShown={isAddEntryModalOpen || isEditEntryModalOpen}
		>
			<div
				className={styles.root}
				style={{ '--current-color': lineColor } as CSSProperties}
			>
				<div className={styles.header}>
					<div className={styles.title}>{title}</div>
					<button onClick={handleClose} className={styles.button_close}>
						<Close className={styles.icon_close} />
					</button>
				</div>
				<div className={styles.buttons_row}>
					{name && iconName && (
						<div className={styles.name_col}>
							<div className={styles.icon_wrapper}>
								<Icon iconName={iconName} className={styles.icon} />
							</div>
							<div className={styles.name}>{name}</div>
						</div>
					)}
					<div className={styles.calendar_wrapper}>
						<Button
							className={styles.calendar_button}
							onClick={() => {
								setCalendarData({ ...calendarData, isOpen: true });
							}}
						>
							<div className={styles.calendar_button_content}>
								<Calendar className={styles.calendar_button_icon} />
								<div className={styles.calendar_button_label}>
									{format(calendarData.date, 'dd.MM.yyyy')}
								</div>
							</div>
						</Button>
					</div>
				</div>
				<div className={styles.content}>
					<div className={styles.input_wrapper}>
						<div className={styles.input_title}>Insert value</div>
						<Input
							placeholder={`New value for ${format(
								calendarData.date,
								'dd.MM.yyyy',
							)}`}
							type="number"
							value={newValue}
							onChange={handleValueChange}
							className={styles.input}
						/>
					</div>
				</div>
				<img
					src={blob}
					className={styles.img}
					style={{ '--filter': filter } as CSSProperties}
				/>
			</div>
			{calendarData.isOpen && (
				<ModalDatePicker
					className={styles.modal_date_picker}
					value={calendarData.date}
					onChange={handleDatePickerChange}
					onClose={handleDatePickerClose}
					style={
						{
							'--current-fill-color': bgColor,
							'--current-color': lineColor,
						} as CSSProperties
					}
				/>
			)}
			<Button
				className={styles.confirm_button}
				onClick={handleConfirm}
				disabled={isConfirmDisabled}
				style={{ '--current-color': lineColor } as CSSProperties}
				primary
			>
				<Check className={styles.confirm_button_icon} />
			</Button>
		</Sheet>
	);
}

export default AddEntryContainer;
