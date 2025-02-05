import { createEvent } from 'effector';

import { DataSet } from '../../Shared/types';

import { AddEntryEventParams, DeleteEntryEventParams } from './types';

export const addDataSetEvent = createEvent<DataSet>();
export const addEntryEvent = createEvent<AddEntryEventParams>();
export const deleteEntryEvent = createEvent<DeleteEntryEventParams>();
