import { createEvent } from 'effector';

import { DataToEdit } from './types';

export const setIsCreateDataSetModalOpenEvent = createEvent<boolean>();
export const setIsDataSetViewModalOpenEvent = createEvent<boolean>();
export const setIsAddEntryModalOpenEvent = createEvent<boolean>();
export const setIsEditEntryModalOpenEvent = createEvent<boolean>();
export const setOpenDataSetId = createEvent<string | null>();
export const setDataToEditOptionsEvent = createEvent<DataToEdit>();
export const setDataToEditEvent = createEvent<DataToEdit>();
export const setDataToDeleteEvent = createEvent<DataToEdit>();
