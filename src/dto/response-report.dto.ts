import { ProjectDto } from './project.dto';
import { ConditionDto } from './conditions/condition.dto';

export class ResponseReportDto {
  conditions_count: number;
  projects_count: number;
  conditions: ConditionDto[];
  inspection: {
    project: ProjectDto;
    result: boolean[];
  }[];
}
