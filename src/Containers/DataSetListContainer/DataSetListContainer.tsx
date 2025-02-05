import clsx from 'clsx';
import { useUnit } from 'effector-react';

import DataSet from '../../Components/DataSet';
import { $data } from '../../Model/data/state';
import {
	setIsAddEntryModalOpenEvent,
	setIsDataSetViewModalOpenEvent,
	setOpenDataSetId,
} from '../../Model/ui/events';
import getDateRange from '../../Shared/getDateRange';

import { DataSetListContainerProps } from './types';

import styles from './DataSetListContainer.module.css';

function DataSetListContainer({ className, style }: DataSetListContainerProps) {
	const data = useUnit($data);

	function handleCardClick(id: string) {
		return () => {
			setIsDataSetViewModalOpenEvent(true);
			setOpenDataSetId(id);
		};
	}

	function handleAddEntryButtonClick(id: string) {
		setOpenDataSetId(id);
		setIsAddEntryModalOpenEvent(true);
	}

	const rows = data.map(
		({
			id,
			name,
			iconName,
			data,
			chartSettings,
			units,
			chartType,
			lineColor,
			fillColor,
			timeRange,
		}) => {
			const [minDate, maxDate] = getDateRange(timeRange);
			return (
				<button
					key={id}
					className={styles.dataset_wrapper}
					onClick={handleCardClick(id)}
				>
					<DataSet
						id={id}
						name={name}
						iconName={iconName}
						data={data}
						chartSettings={chartSettings}
						chartType={chartType}
						lineColor={lineColor}
						fillColor={fillColor}
						units={units}
						onAddEntryButtonClick={handleAddEntryButtonClick}
						minDate={minDate}
						maxDate={maxDate}
					/>
				</button>
			);
		},
	);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{rows}
		</div>
	);
}

export default DataSetListContainer;
