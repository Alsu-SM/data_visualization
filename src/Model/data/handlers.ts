import { isEqual, isSameDay } from 'date-fns';

import { DataSet } from '../../Shared/types';

import { AddEntryEventParams, DeleteEntryEventParams } from './types';

export function addEntryEventHandler(
	state: DataSet[],
	{ id, value, date }: AddEntryEventParams,
): DataSet[] {
	return state.map((dataSet) => {
		if (dataSet.id === id) {
			const currentIndex = dataSet.data.findIndex((data) =>
				isSameDay(data.date, date),
			);
			if (currentIndex + 1) {
				const newDataSet = dataSet.data.map((data, index) => {
					if (index === currentIndex) {
						return { ...data, value };
					}
					return { ...data };
				});

				return { ...dataSet, data: newDataSet };
			}
			const newDataSet = dataSet.data.slice();
			newDataSet.push({ value, date });
			newDataSet.sort((a, b) => +a.date - +b.date);
			return { ...dataSet, data: newDataSet };
		}

		return { ...dataSet };
	});
}

export function addDataSetEventHandler(
	state: DataSet[],
	dataSet: DataSet,
): DataSet[] {
	return [...state, dataSet];
}

export function deleteEntryEventHandler(
	state: DataSet[],
	{ id, date }: DeleteEntryEventParams,
): DataSet[] {
	return state.map((dataSet) => {
		if (dataSet.id === id) {
			const newEntries = dataSet.data.filter(
				(data) => !isEqual(data.date, date),
			);

			return { ...dataSet, data: newEntries };
		}

		return { ...dataSet };
	});
}
