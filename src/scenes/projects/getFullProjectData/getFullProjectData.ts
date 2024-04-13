import { v4 as getUuid } from 'uuid';

import { InspectionStatus } from 'src/types';

import { CreateProjectData, Project } from '../project.interface';

export const getFullProjectData = (
  data: CreateProjectData,
  inEditMode = false,
): Partial<Project> => {
  const nowTimestamp = new Date().toISOString();

  const commonData = {
    ...data,
    repository: {
      ...data.repository,
      link: `https://github.com/${data.repository.ownerNickname}/${data.repository.title}`,
    },
    lastEditionTimestamp: nowTimestamp,
  };

  return inEditMode
    ? commonData
    : {
        ...commonData,
        id: getUuid(),
        creationTimestamp: nowTimestamp,
        lastInspectionStatus: InspectionStatus.didNotStart,
      };
};
