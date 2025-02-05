import { combine, createStore, Store } from 'effector';

import { DataSet } from '../../Shared/types';
import { $data } from '../data/state';

import { DATA_TO_EDIT_DEFAULT } from './constants';
import {
	setDataToDeleteEvent,
	setDataToEditEvent,
	setDataToEditOptionsEvent,
	setIsAddEntryModalOpenEvent,
	setIsCreateDataSetModalOpenEvent,
	setIsDataSetViewModalOpenEvent,
	setIsEditEntryModalOpenEvent,
	setOpenDataSetId,
} from './events';
import { DataToEdit } from './types';

export const $isCreateDataSetModalOpen = createStore<boolean>(false).on(
	setIsCreateDataSetModalOpenEvent,
	(_, isOpen: boolean) => isOpen,
);

export const $openDataSetId = createStore<string | null>(null).on(
	setOpenDataSetId,
	(_, openDataSetId: string | null) => openDataSetId,
);

export const $openDataSet: Store<DataSet | null> = combine(
	$data,
	$openDataSetId,
	(data: DataSet[], dataSetId: string | null) =>
		data.find(({ id }) => id === dataSetId) || null,
);

export const $isDataSetViewModalOpen = createStore<boolean>(false).on(
	setIsDataSetViewModalOpenEvent,
	(_, isDataSetViewModalOpen: boolean) => isDataSetViewModalOpen,
);

export const $isAddEntryModalOpen = createStore<boolean>(false).on(
	setIsAddEntryModalOpenEvent,
	(_, isAddEntryModalOpen: boolean) => isAddEntryModalOpen,
);
export const $isEditEntryModalOpen = createStore<boolean>(false).on(
	setIsEditEntryModalOpenEvent,
	(_, isEditEntryModalOpen: boolean) => isEditEntryModalOpen,
);

export const $dataToEditOptions = createStore<DataToEdit>(
	DATA_TO_EDIT_DEFAULT,
).on(setDataToEditOptionsEvent, (_, data) => data);
export const $dataToDelete = createStore<DataToEdit>(DATA_TO_EDIT_DEFAULT).on(
	setDataToDeleteEvent,
	(_, data) => data,
);
export const $dataToEdit = createStore<DataToEdit>(DATA_TO_EDIT_DEFAULT).on(
	setDataToEditEvent,
	(_, data) => data,
);
