import { ConditionEnumDto } from './condition.enum.dto';
import { ConditionParamsDto } from './condition-params.dto';

export class ConditionDto {
  readonly type: ConditionEnumDto;
  readonly params: ConditionParamsDto;
}
