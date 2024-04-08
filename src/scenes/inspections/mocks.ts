import { ConditionType } from 'src/types/conditions';
import { InspectionStatus } from 'src/types/inspections';
import { getReportResult } from 'src/utils/getReportResult';

const MOCK_DATE_FNS_SINGLE_CONDITIONS = [
  {
    type: ConditionType.fileExistence,
    id: '1',
    params: './README.md',
  },
  {
    type: ConditionType.fileExistence,
    id: '1.2',
    params: './tsconfig.json',
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2.1',
    params: {
      path: './package.json',
      pattern: '"license": "MIT"',
    },
  },
];

export const MOCK_INSPECTIONS_PAGE_DATA = {
  type: 'inspections',
  paginationData: {
    pagesCount: 1,
    currentPage: 1,
  },
  data: [
    {
      id: 'testInsp',
      title: `основные конфиги в date-fns `,
      description: '-',
      lastInspectionTimestamp: '2024-04-01T16:07:30-05:00',
      lastInspectionStatus: getReportResult(0),
      conditionsCount: 3,
    },
  ],
};

export const MOCK_INSPECTION_PAGE_DATA = {
  type: 'inspection',
  data: {
    projects: [
      {
        title: 'date-fns',
        id: 'date-fns',
      },
    ],
    conditions: [
      {
        title: 'Лицензия MIT и наличие README и tsconfig',
        id: 'react-version',
      },
    ],
    id: 'check-date-fns',
    title: `основные конфиги в date-fns `,
    description: '-',
    creationTimestamp: '2024-04-01T16:07:21-05:00',
    lastEditionTimestamp: '2024-04-01T16:07:21-05:00',
    lastInspectionTimestamp: '2024-04-01T16:07:30-05:00',
    inspectionData: {
      status: InspectionStatus.success,
      details: {
        conditions: MOCK_DATE_FNS_SINGLE_CONDITIONS,
        projectsInspections: [
          {
            project: {
              title: 'date-fns',
              id: '-1',
            },
            status: InspectionStatus.success,
            conditionsStatuses: [
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
