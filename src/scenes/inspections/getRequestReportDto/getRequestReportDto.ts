import { RequestReportDto } from '../../../dto/request-report.dto';
import { Project } from '../../projects/project.interface';
import { Condition } from '../../conditions/condition.interface';
import { ProjectDto } from '../../../dto/project.dto';
import { ConditionDto } from '../../../dto/conditions/condition.dto';
import { ConditionEnumDto } from '../../../dto/conditions/condition.enum.dto';
import { ConditionType } from '../../../types';
import {
  CheckFieldParamsDto,
  ConditionParamsDto,
  FindFileParamsDto,
  FindLineParamsDto,
} from '../../../dto/conditions/condition-params.dto';

export const getRequestReportDto = (
  projects: Project[],
  conditions: Condition[],
): RequestReportDto => {
  const projectDtos: ProjectDto[] = projects.map((project) => {
    return {
      system: 'github',
      owner: project.repository.ownerNickname,
      repo: project.repository.title,
    } as ProjectDto;
  });

  const conditionDtos: ConditionDto[] = conditions.map(
    (condition) =>
      ({
        type: mapConditionType(condition.type),
        params: mapConditionParams(condition),
      }) as ConditionDto,
  );

  return {
    projects: projectDtos,
    conditions: conditionDtos,
  } as RequestReportDto;
};

function mapConditionType(type: ConditionType): ConditionEnumDto {
  switch (type) {
    case ConditionType.fileExistence:
      return ConditionEnumDto.FindFile;
    case ConditionType.stringsInFilesMatching:
      return ConditionEnumDto.FindLine;
    case ConditionType.fieldValueValidation:
      return ConditionEnumDto.CheckField;
  }
}

function mapConditionParams(condition: Condition): ConditionParamsDto {
  const path: string = condition.params.path;
  switch (condition.type) {
    case ConditionType.fileExistence:
      return { filePath: path } as FindFileParamsDto;
    case ConditionType.stringsInFilesMatching:
      return {
        filePath: path,
        line: condition.params.patterns,
      } as FindLineParamsDto;
    case ConditionType.fieldValueValidation:
      return {
        filePath: path,
        field: condition.params.field,
        value: condition.params.value,
      } as CheckFieldParamsDto;
  }
}
