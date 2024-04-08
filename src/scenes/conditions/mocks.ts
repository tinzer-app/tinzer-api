import { ConditionType } from 'src/types/conditions';

export const MOCK_DATE_FNS_CONDITIONS = [
  {
    type: ConditionType.fileExistence,
    id: '1',
    params: ['./README.md', 'tsconfig.json'],
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2',
    params: [
      {
        path: './package.json',
        patterns: ['"license": "MIT"'],
      },
    ],
  },
];

export const MOCK_CONDITIONS_PAGE_DATA = {
  type: 'conditions',
  data: [
    {
      title: `Лицензия MIT и наличие README и tsconfig`,
      description: 'лицензия и конфиги',
      id: '0',
      creationTimestamp: '2024-03-30T11:54:39-05:00',
      lastEditionTimestamp: '2024-03-30T11:54:39-05:00',
    },
  ],
  paginationData: {
    pagesCount: 1,
    currentPage: 1,
  },
};

export const MOCK_CONDITION_PAGE_DATA = {
  type: 'condition',
  data: {
    title: `Лицензия MIT и наличие README и tsconfig`,
    description:
      'Наличие в package.json лицензии MIT и наличие файлов README.md и tsconfig.json в корне репозитория',
    id: '0',
    creationTimestamp: '2024-03-30T11:54:39-05:00',
    lastEditionTimestamp: '2024-03-30T11:54:39-05:00',
    conditions: MOCK_DATE_FNS_CONDITIONS,
  },
};
