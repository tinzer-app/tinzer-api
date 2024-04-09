import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ConditionsService } from './conditions.service';
import { ConditionDto } from './condition.dto';

@Controller('/conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Get()
  getConditionsListData() {
    return this.conditionsService.getConditionsListData();
  }

  @Get('/:id')
  getCondition(@Param('id') id: string) {
    return this.conditionsService.getCondition(id);
  }

  @Post('/create')
  createCondition(@Body() conditionDto: ConditionDto) {
    return this.conditionsService.createCondition(conditionDto);
  }
}
