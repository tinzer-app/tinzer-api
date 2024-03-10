import { ConditionType } from 'src/types/conditions';

export const MOCK_DATE_FNS_CONDITIONS = [
  {
    type: ConditionType.fileExistence,
    id: '1',
    params: ['./package.json', './src/App.tsx'],
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2',
    params: [
      {
        path: './package.json',
        patterns: [
          '"license": "MIT"',
          '"description": "Modern JavaScript date utility library"',
        ],
      },
      {
        path: './README.md',
        patterns: ['read me :)'],
      },
    ],
  },
];

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

export const MOCK_CONDITION_PAGE_DATA = {
  type: 'condition',
  data: {
    id: 'cond-date-fns',
    title: 'Лицензия и описание',
    description:
      'Наличие строк "license": "MIT" и "description": "Modern JavaScript date utility library" в package.json',
    creationTimestamp: '2023-01-07 21:32:11',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    conditions: MOCK_DATE_FNS_CONDITIONS,
  },
};
