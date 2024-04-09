import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

import { InspectionsService } from './inspections.service';
import { MOCK_REQUEST_REPORT } from '../../dto/request-report.mock';
import { InspectionDto } from './inspection.dto';

@Controller('/inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Get()
  getInspectionsListData() {
    return this.inspectionsService.getInspectionsListData();
  }

  @Get('/:id/report')
  getReportData() {
    return this.inspectionsService.getReportData();
  }

  @Get('/:id')
  getInspection(@Param('id') id: string) {
    return this.inspectionsService.getInspection(id);
  }

  @Post('/create')
  createInspection(@Body() inspectionDto: InspectionDto) {
    return this.inspectionsService.createInspection(inspectionDto);
  }

  // todo body inspection
  @Post('/:id/runInspection')
  async runInspection(@Param('id') id: string, @Res() response) {
    return response
      .status(HttpStatus.CREATED)
      .json(this.inspectionsService.runInspection(MOCK_REQUEST_REPORT));
  }
}
