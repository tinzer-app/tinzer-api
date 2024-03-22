import { ConditionDto } from './condition.dto';
import { ProjectDto } from './project.dto';

export class RequestReportDto {
  readonly projects: ProjectDto[];
  readonly conditions: ConditionDto[];
}
