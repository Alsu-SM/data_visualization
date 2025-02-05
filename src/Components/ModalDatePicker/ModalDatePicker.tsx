import DatePicker from 'react-datepicker';
import clsx from 'clsx';

import Modal from '../Modal/Modal';

import { ModalDatePickerProps } from './types';

import styles from './ModalDatePicker.module.css';

function ModalDatePicker({
	value,
	onChange,
	onClose,
	className,
	style,
}: ModalDatePickerProps) {
	function handleChange(date: Date | null) {
		if (date) {
			onChange(date);
		}
	}

	return (
		<Modal
			className={clsx(styles.root, className)}
			style={style}
			onClose={onClose}
		>
			<DatePicker
				selected={value}
				onChange={handleChange}
				inline
				className="datepicker"
			/>
		</Modal>
	);
}

export default ModalDatePicker;
