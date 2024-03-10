import { getReportResult } from 'src/utils/getReportResult';

export const MOCK_INSPECTIONS_PAGE_DATA = {
  type: 'inspections',
  paginationData: {
    pagesCount: 3,
    currentPage: 1,
  },
  data: Array.from({ length: 10 }).map((_, idx) => ({
    id: idx.toString(),
    title: `проверка ${idx}`,
    description: 'Краткое описание...',
    lastInspectionTimestamp: '2022-08-10T10:30:04-05:00',
    lastInspectionStatus: getReportResult(idx),
    conditionsCount: idx,
  })),
};
