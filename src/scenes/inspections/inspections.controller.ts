import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';

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

  @Post('/:id/runInspection')
  runInspection(@Res() response) {
    return response
      .status(HttpStatus.I_AM_A_TEAPOT)
      .json(this.inspectionsService.runInspection());
  }
}
