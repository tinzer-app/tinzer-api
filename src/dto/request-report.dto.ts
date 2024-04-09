import { ConditionDto } from './conditions/condition.dto';
import { ProjectDto } from './projects/project.dto';

export class RequestReportDto {
  readonly projects: ProjectDto[];
  readonly conditions: ConditionDto[];
}
