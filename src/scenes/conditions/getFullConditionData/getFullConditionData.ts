import { v4 as getUuid } from 'uuid';

import { Condition, CreateConditionData } from '../condition.interface';

export const getFullConditionData = (
  data: CreateConditionData,
  inEditMode = false,
): Partial<Condition> => {
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
