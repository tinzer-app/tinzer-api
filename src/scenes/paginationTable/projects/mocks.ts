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
