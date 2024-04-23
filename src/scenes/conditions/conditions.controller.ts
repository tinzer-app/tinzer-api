import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { PaginationRequest } from 'src/types';

import { ConditionsService } from './conditions.service';
import {
  CreateConditionRequestParams,
  EditConditionRequestParams,
} from './condition.interface';

@Controller('/conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Post()
  getConditionsListData(@Body() { currentPaginationPage }: PaginationRequest) {
    return this.conditionsService.getConditionsListData(currentPaginationPage);
  }

  @Get('/:id')
  getCondition(@Param('id') id: string) {
    return this.conditionsService.getCondition(id);
  }

  @Post('/creating')
  createCondition(@Body() { data }: CreateConditionRequestParams) {
    return this.conditionsService.createCondition(data.data);
  }

  @Post('/editing')
  editCondition(@Body() { data: { data, id } }: EditConditionRequestParams) {
    return this.conditionsService.editCondition(data, id);
  }

  @Delete('/deleting')
  deleteCondition(@Body() { id }: WithId) {
    return this.conditionsService.deleteCondition(id);
  }
}
