import { Controller, Get, Post } from '@nestjs/common';

import { InspectionsService } from './inspections.service';

@Controller('/inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Post()
  getInspectionsListData() {
    return this.inspectionsService.getInspectionsListData();
  }

  @Get('/:id')
  getReportData() {
    return this.inspectionsService.getReportData();
  }
}
