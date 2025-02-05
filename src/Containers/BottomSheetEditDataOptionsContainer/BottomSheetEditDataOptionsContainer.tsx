import { CSSProperties } from 'react';
import { useUnit } from 'effector-react';

import BottomSheet from '../../Components/BottomSheet';
import Button from '../../Components/Button';
import { DATA_TO_EDIT_DEFAULT } from '../../Model/ui/constants';
import {
	setDataToDeleteEvent,
	setDataToEditOptionsEvent,
	setIsEditEntryModalOpenEvent,
} from '../../Model/ui/events';
import { $dataToEditOptions } from '../../Model/ui/state';

import styles from './BottomSheetEditDataOptionsContainer.module.css';

function BottomSheetEditDataOptionsContainer() {
	const { isShown, lineColor, date, value, id, units } =
		useUnit($dataToEditOptions);
	const handleClose = () => {
		setDataToEditOptionsEvent({
			isShown: false,
			lineColor,
			date,
			value,
			id,
			units,
		});
	};
	const handleDelete = () => {
		setDataToDeleteEvent({ isShown: true, lineColor, date, value, id, units });
		handleClose();
	};
	const handleEdit = () => {
		setIsEditEntryModalOpenEvent(true);
		handleClose();
	};
	return (
		<BottomSheet
			isShown={isShown}
			onClose={handleClose}
			style={{ '--line-color': lineColor } as CSSProperties}
		>
			<div className={styles.content}>
				<Button className={styles.button} onClick={handleDelete}>
					Delete entry
				</Button>
				<Button className={styles.button} primary onClick={handleEdit}>
					Edit entry
				</Button>
			</div>
		</BottomSheet>
	);
}

export default BottomSheetEditDataOptionsContainer;
