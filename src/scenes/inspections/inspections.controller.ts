import { Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';

import { InspectionsService } from './inspections.service';
import { MOCK_REQUEST_REPORT } from '../../dto/request-report.mock';

@Controller('/inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Get()
  getInspectionsListData() {
    return this.inspectionsService.getInspectionsListData();
  }

  @Get('/:id')
  getReportData() {
    return this.inspectionsService.getReportData();
  }

  // todo body inspection
  @Post('/:id/runInspection')
  async runInspection(@Param('id') id: number, @Res() response) {
    return response
      .status(HttpStatus.CREATED)
      .json(this.inspectionsService.runInspection(MOCK_REQUEST_REPORT));
  }
}
