import { v4 as getUuid } from 'uuid';

import { CreateInspectionData, Inspection } from '../../inspection.interface';

export const getFullInspectionData = (
  data: CreateInspectionData,
  inEditMode = false,
): Partial<Inspection> => {
  const nowTimestamp = new Date().toISOString();

  const commonData = {
    ...data,
    lastEditionTimestamp: nowTimestamp,
  };

  return inEditMode
    ? commonData
    : {
        ...commonData,
        id: getUuid(),
        creationTimestamp: nowTimestamp,
      };
};
