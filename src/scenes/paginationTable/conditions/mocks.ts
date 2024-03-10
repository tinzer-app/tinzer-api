export const MOCK_CONDITIONS_PAGE_DATA = {
  type: 'conditions',
  data: Array.from({ length: 10 }).map((_, idx) => ({
    title: `правило ${idx}`,
    description: 'Краткое описание...',
    id: idx.toString(),
    creationTimestamp: '2022-08-10T10:30:04-05:00',
    lastEditionTimestamp: '2023-12-24T04:56:37-05:00',
  })),
  paginationData: {
    pagesCount: 2,
    currentPage: 1,
  },
};
