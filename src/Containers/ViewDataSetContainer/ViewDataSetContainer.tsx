import { useMemo } from 'react';
import { BarChart, LineChart } from '@packages/charts';
import clsx from 'clsx';
import { useUnit } from 'effector-react';

import DataSet from '../../Components/DataSet';
import { DataSetView } from '../../Components/DataSet/types';
import Icon from '../../Components/Icon';
import Sheet from '../../Components/Sheet';
import {
	setIsDataSetViewModalOpenEvent,
	setOpenDataSetId,
} from '../../Model/ui/events';
import { $isDataSetViewModalOpen, $openDataSet } from '../../Model/ui/state';
import { RGB_DEFAULT } from '../../Shared/constants';
import getDateRange from '../../Shared/getDateRange';
import { ChartTypes, Icons, TimeRange } from '../../Shared/types';
import BottomSheetEditDataOptionsContainer from '../BottomSheetEditDataOptionsContainer';
import EntriesListContainer from '../EntriesListContainer';
import ModalDeleteEntryContainer from '../ModalDeleteEntryContainer';

import { ViewDataSetContainerProps } from './types';

import styles from './ViewDataSetContainer.module.css';

function ViewDataSetContainer({ className }: ViewDataSetContainerProps) {
	const isDataSetViewModalOpen = useUnit($isDataSetViewModalOpen);
	const openDataSet = useUnit($openDataSet);
	const {
		id = '',
		name = '',
		iconName = Icons.FileQuestion,
		lineColor = '',
		fillColor = '',
		units = '',
		data = [],
		chartType = ChartTypes.Line,
		chartSettings = {},
		timeRange = TimeRange.Week,
		rgb = RGB_DEFAULT,
	} = openDataSet || {};
	function handleClose() {
		setIsDataSetViewModalOpenEvent(false);
	}
	function handleTransitionEnd() {
		if (!isDataSetViewModalOpen) {
			setOpenDataSetId(null);
		}
	}
	const [minDate, maxDate] = getDateRange(timeRange);

	return (
		<Sheet
			className={clsx(className)}
			isShown={isDataSetViewModalOpen}
			onTransitionEnd={handleTransitionEnd}
		>
			<div className={styles.root}>
				<div className={styles.header}>
					{name && iconName && (
						<div className={styles.title}>
							<Icon iconName={iconName} className={styles.icon} />
							{name}
						</div>
					)}
					<button onClick={handleClose} className={styles.button_close}>
						<Icon iconName={Icons.ArrowLeft} className={styles.icon_close} />
					</button>
				</div>
				<div className={styles.content}>
					<div className={styles.chart_wrapper}>
						<div className={styles.units}>{units}</div>
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
							minDate={minDate}
							maxDate={maxDate}
							view={DataSetView.Inline}
							width={500}
							height={250}
							rgb={rgb}
						/>
					</div>
					{openDataSet && <EntriesListContainer openDataSet={openDataSet} />}
				</div>
			</div>
			<BottomSheetEditDataOptionsContainer />
			<ModalDeleteEntryContainer />
		</Sheet>
	);
}

export default ViewDataSetContainer;
