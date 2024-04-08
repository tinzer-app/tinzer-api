import { InspectionStatus } from 'src/types/inspections';
import { getReportResult } from 'src/utils/getReportResult';

export const MOCK_PROJECTS_PAGE_DATA = {
  type: 'projects',
  data: [
    {
      id: '-1',
      repository: {
        branch: 'master',
        link: 'https://github.com/date-fns/date-fns',
      },
      title: `date-fns`,
      description:
        'date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js',
      creationTimestamp: '2024-03-10T10:30:04-05:00',
      lastEditionTimestamp: '2024-03-29T21:58:49-05:00',
      lastInspectionStatus: getReportResult(0),
    },
    ...Array.from({ length: 9 }).map((_, idx) => ({
      id: idx.toString(),
      repository: {
        branch: 'master',
        link: 'https://github.com/date-fns/date-fns',
      },
      title: `тест ${idx}`,
      description: 'description',
      creationTimestamp: '2022-01-03T12:00:09-05:00',
      lastEditionTimestamp: '2022-01-03T12:00:09-05:00',
      lastInspectionStatus: getReportResult(idx),
    })),
  ],
  paginationData: {
    pagesCount: 4,
    currentPage: 1,
  },
};

export const MOCK_PROJECT_PAGE_DATA = {
  type: 'project',
  data: {
    id: 'proj-date-fns',
    title: 'date-fns',
    description:
      'date-fns provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js',
    repository: {
      link: 'https://github.com/date-fns/date-fns',
      branch: 'master',
      title: 'date-fns',
      ownerNickname: 'johnDate-fns',
    },
    creationTimestamp: '2024-03-10T10:30:04-05:00',
    lastEditionTimestamp: '2024-03-29T21:58:49-05:00',
    lastInspectionStatus: InspectionStatus.success,
  },
};
