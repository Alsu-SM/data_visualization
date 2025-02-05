import { CSSProperties } from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useUnit } from 'effector-react';

import Button from '../../Components/Button';
import Modal from '../../Components/Modal';
import { deleteEntryEvent } from '../../Model/data/events';
import { DATA_TO_EDIT_DEFAULT } from '../../Model/ui/constants';
import { setDataToDeleteEvent } from '../../Model/ui/events';
import { $dataToDelete } from '../../Model/ui/state';

import { ModalDeleteEntryContainerProps } from './types';

import styles from './ModalDeleteEntryContainer.module.css';

function ModalDeleteEntryContainer({
	className,
	style,
}: ModalDeleteEntryContainerProps) {
	const { id, isShown, lineColor, date, value, units } = useUnit($dataToDelete);
	const handleClose = () => {
		setDataToDeleteEvent(DATA_TO_EDIT_DEFAULT);
	};
	const handleDelete = () => {
		setDataToDeleteEvent(DATA_TO_EDIT_DEFAULT);
		deleteEntryEvent({ id, date });
	};
	return (
		isShown && (
			<Modal
				onClose={handleClose}
				style={{ ...style, '--current-color': lineColor } as CSSProperties}
				className={className}
			>
				<div
					className={styles.content}
					style={{ ...style, '--current-color': lineColor } as CSSProperties}
				>
					<div className={styles.data}>
						Delete entry{' '}
						<span className={styles.value}>{`${value} ${units}`}</span> from{' '}
						<span className={styles.date}>{format(date, 'dd.MM.yy')}</span>
					</div>
					<div className={styles.buttons_row}>
						<Button
							className={clsx(styles.button, styles.button_delete)}
							onClick={handleDelete}
						>
							Delete
						</Button>
						<Button
							className={clsx(styles.button, styles.button_keep)}
							primary
							onClick={handleClose}
						>
							Keep
						</Button>
					</div>
				</div>
			</Modal>
		)
	);
}

export default ModalDeleteEntryContainer;
