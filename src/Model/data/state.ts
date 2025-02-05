import { createStore } from 'effector';

import { DataSet } from '../../Shared/types';

import { DATA_DEFAULT } from './constants';
import { addDataSetEvent, addEntryEvent, deleteEntryEvent } from './events';
import {
	addDataSetEventHandler,
	addEntryEventHandler,
	deleteEntryEventHandler,
} from './handlers';

export const $data = createStore<DataSet[]>(DATA_DEFAULT)
	.on(addDataSetEvent, addDataSetEventHandler)
	.on(addEntryEvent, addEntryEventHandler)
	.on(deleteEntryEvent, deleteEntryEventHandler);
