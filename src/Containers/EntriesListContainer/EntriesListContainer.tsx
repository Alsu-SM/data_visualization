import { CSSProperties, useMemo } from 'react';
import clsx from 'clsx';
import { format } from 'date-fns';

import Button from '../../Components/Button';
import { Rocket } from '../../Components/Icon/Icons';
import ArrowRight from '../../Components/Icon/Icons/ArrowRight';
import TrendingDown from '../../Components/Icon/Icons/TrendingDown';
import TrendingUp from '../../Components/Icon/Icons/TrendingUp';
import {
	setDataToEditOptionsEvent,
	setIsAddEntryModalOpenEvent,
} from '../../Model/ui/events';
import BottomSheetEditDataOptionsContainer from '../BottomSheetEditDataOptionsContainer';
import ModalDeleteEntryContainer from '../ModalDeleteEntryContainer';

import { EntriesListContainerProps } from './types';

import styles from './EntriesListContainer.module.css';

function EntriesListContainer({
	openDataSet,
	className,
	style,
}: EntriesListContainerProps) {
	const { id, lineColor = '', fillColor, units = '', data } = openDataSet || {};

	function handleAddEntryButtonClick() {
		setIsAddEntryModalOpenEvent(true);
	}

	const items = useMemo(
		() =>
			data
				?.map(({ value, date }, i) => {
					const isStart = i === 0;
					const isUp = value > data[i - 1]?.value;
					const isDown = value < data[i - 1]?.value;

					let iconElement = isStart ? (
						<Rocket className={styles.icon} />
					) : (
						<ArrowRight className={styles.icon} />
					);
					if (isUp) {
						iconElement = <TrendingUp className={styles.icon} />;
					}
					if (isDown) {
						iconElement = <TrendingDown className={styles.icon} />;
					}

					return (
						<button
							className={styles.item}
							onClick={() => {
								setDataToEditOptionsEvent({
									isShown: true,
									id,
									date,
									value,
									lineColor,
									units,
								});
							}}
						>
							<div className={styles.item_content}>
								<div className={styles.date}>{format(date, 'dd.MM.yyyy')}</div>
								<div className={styles.value}>
									{`${value} ${units}`} {iconElement}
								</div>
							</div>
						</button>
					);
				})
				.reverse(),
		[units, data],
	);

	return (
		<div
			className={clsx(styles.root, className)}
			style={
				{
					...style,
					'--line-color': lineColor,
					'--fill-color': fillColor,
				} as CSSProperties
			}
		>
			<div className={styles.title}>Last entries</div>
			<div className={styles.items}>{items}</div>
			<div className={styles.button_wrapper}>
				<Button
					color={lineColor}
					className={styles.add_entry_button}
					onClick={handleAddEntryButtonClick}
				>
					Add new entry
				</Button>
			</div>
		</div>
	);
}

export default EntriesListContainer;
