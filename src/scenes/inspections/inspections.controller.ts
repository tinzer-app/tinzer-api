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
import { InspectionDto } from './inspection.dto';

@Controller('/inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Post()
  getInspectionsListData() {
    return this.inspectionsService.getInspectionsListData();
  }

  @Get('/:id/report')
  getReportData() {
    return this.inspectionsService.getReportData();
  }

  @Post('/:id')
  getInspection(@Param('id') id: string) {
    return {
      type: 'inspection',
      data: this.inspectionsService.getInspection(id),
    };
  }

  @Post('/creating')
  createInspection(@Body() inspectionDto: InspectionDto) {
    return this.inspectionsService.createInspection(inspectionDto);
  }
}
