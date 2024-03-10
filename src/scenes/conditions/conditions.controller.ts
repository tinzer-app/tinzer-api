import { Controller, Get, Post } from '@nestjs/common';

import { ConditionsService } from './conditions.service';

@Controller('/conditions')
export class ConditionsController {
  constructor(private readonly conditionsService: ConditionsService) {}

  @Post()
  getConditionsListData() {
    return this.conditionsService.getConditionsListData();
  }

  @Get('/:id')
  getReportData() {
    return this.conditionsService.getReportData();
  }
}
