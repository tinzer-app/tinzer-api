import { RequestReportDto } from './request-report.dto';
import { ConditionEnumDto } from './conditions/condition.enum.dto';
import { ProjectDto } from './projects/project.dto';
import { ConditionDto } from './conditions/condition.dto';

const MOCK_PROJECT_REQUEST: ProjectDto = {
  system: 'github',
  owner: '3D-Daria',
  repo: 'TestForTinzer',
};

const MOCK_CONDITION_FIND_FILE: ConditionDto = {
  type: ConditionEnumDto.FindFile,
  params: {
    filePath: '.github/workflows/deploy.yml',
  },
};
const MOCK_CONDITION_FIND_LINE: ConditionDto = {
  type: ConditionEnumDto.FindLine,
  params: {
    filePath: '.template.config/dotnetcli.host.json',
    line: '"shortName": "cf"',
  },
};
const MOCK_CONDITION_CHECK_FIELD: ConditionDto = {
  type: ConditionEnumDto.CheckField,
  params: {
    filePath: '.scripts/environments.json',
    field: 'Prd',
    value: 'Production',
  },
};

export const MOCK_REQUEST_REPORT: RequestReportDto = {
  projects: [MOCK_PROJECT_REQUEST],
  conditions: [
    MOCK_CONDITION_FIND_FILE,
    MOCK_CONDITION_FIND_LINE,
    MOCK_CONDITION_CHECK_FIELD,
  ],
};
