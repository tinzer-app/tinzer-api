import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ConditionsService } from './conditions.service';
import { ConditionDto } from './condition.dto';

@Controller('/conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Post()
  getConditionsListData() {
    return this.conditionsService.getConditionsListData();
  }

  @Post('/:id')
  getCondition(@Param('id') id: string) {
    return this.conditionsService.getCondition(id);
  }

  @Post('/creating')
  createCondition(@Body() conditionDto: ConditionDto) {
    return this.conditionsService.createCondition(conditionDto);
  }
}
