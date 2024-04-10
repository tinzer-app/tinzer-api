import { InspectionStatus } from 'src/types/inspections';
import { getReportResult } from 'src/utils/getReportResult';

export const MOCK_PROJECTS_PAGE_DATA = {
  type: 'projects',
  data: Array.from({ length: 10 }).map((_, idx) => ({
    id: idx.toString(),
    repository: {
      branch: 'master',
      link: 'https://www.google.com/',
    },
    title: `Проект ${idx}`,
    description: 'Краткое описание...',
    creationTimestamp: '2022-08-10T10:30:04-05:00',
    lastEditionTimestamp: '2022-08-10T10:30:04-05:00',
    lastInspectionStatus: getReportResult(idx),
  })),
  paginationData: {
    pagesCount: 10,
    currentPage: 1,
  },
};

export const MOCK_PROJECT_PAGE_DATA = {
  type: 'project',
  data: {
    id: 'proj-date-fns',
    title: 'date-fns',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet. Purus faucibus ornare suspendisse sed nisi.',
    repository: {
      link: 'https://github.com/date-fns/date-fns',
      branch: 'main',
      title: 'date-fns',
      ownerNickname: 'johnDate-fns',
    },
    creationTimestamp: '2023-01-07 21:32:11',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    lastInspectionStatus: InspectionStatus.success,
  },
};