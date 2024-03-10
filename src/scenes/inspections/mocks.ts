import { ConditionType } from 'src/types/conditions';
import { InspectionStatus } from 'src/types/inspections';
import { getReportResult } from 'src/utils/getReportResult';

const MOCK_DATE_FNS_SINGLE_CONDITIONS = [
  {
    type: ConditionType.fileExistence,
    id: '1',
    params: './package.json',
  },
  {
    type: ConditionType.fileExistence,
    id: '1.1',
    params: './src/App.tsx',
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2.1',
    params: {
      path: './package.json',
      pattern: '"license": "MIT"',
    },
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2.2',
    params: {
      path: './package.json',
      pattern: '"description": "Modern JavaScript date utility library"',
    },
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2.3',
    params: {
      path: './README.md',
      pattern: 'read me :)',
    },
  },
];

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

export const MOCK_INSPECTION_PAGE_DATA = {
  type: 'inspection',
  data: {
    projects: [
      {
        title: 'проект 1',
        id: 'проект 1',
      },
      {
        title: 'date-fns',
        id: 'date-fns',
      },
      {
        title: 'ui-library',
        id: 'ui-library',
      },
    ],
    conditions: [
      {
        title: 'шаблон 1',
        id: 'шаблон 1',
      },
      {
        title: 'наличие dockerfile',
        id: 'наличие dockerfile',
      },
    ],
    id: 'check-date-fns',
    title: 'Проверка package.json в date-fns',
    description:
      'Проверка наличия строк "license": "MIT" и "description": "Modern JavaScript date utility library" в package.json',
    creationTimestamp: '2023-12-24 11:05:58',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    lastInspectionTimestamp: '2023-12-29 04:00:00',
    inspectionData: {
      status: InspectionStatus.fail,
      details: {
        conditions: MOCK_DATE_FNS_SINGLE_CONDITIONS,
        projectsInspections: [
          {
            project: {
              title: 'example',
              id: '1',
            },
            status: InspectionStatus.fail,
            conditionsStatuses: [
              InspectionStatus.success,
              InspectionStatus.fail,
              InspectionStatus.success,
              InspectionStatus.fail,
              InspectionStatus.fail,
            ],
          },
          {
            project: {
              title: 'date-fns',
              id: 'date-fns',
            },
            status: InspectionStatus.success,
            conditionsStatuses: [
              InspectionStatus.success,
              InspectionStatus.success,
              InspectionStatus.success,
              InspectionStatus.success,
              InspectionStatus.success,
            ],
          },
        ],
      },
    },
  },
};
