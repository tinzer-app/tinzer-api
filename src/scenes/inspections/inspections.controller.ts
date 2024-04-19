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
import { getRequestReportDto } from './getRequestReportDto/getRequestReportDto';
import { RequestReportDto } from '../../dto/request-report.dto';
import { Condition } from '../conditions/condition.interface';
import { Project } from '../projects/project.interface';
import { Inspection, InspectionData } from './inspection.interface';
import { getInspectionDataDto } from './getInspectionDataDto/getInspectionDataDto';

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

  @Post('/:id/runInspection')
  async runInspection(@Param('id') id: string, @Res() response) {
    const inspection: Inspection =
      await this.inspectionsService.getInspection(id);
    const projects: Project[] = [];
    for (let i = 0; i < inspection.projects.length; i++) {
      projects.push(
        await this.inspectionsService.getProject(inspection.projects[i].id),
      );
    }
    const conditions: Condition[] = [];
    for (let i = 0; i < inspection.conditions.length; i++) {
      conditions.push(
        await this.inspectionsService.getCondition(inspection.conditions[i].id),
      );
    }
    const requestReportDto: RequestReportDto = getRequestReportDto(
      projects,
      conditions,
    );

    const report =
      await this.inspectionsService.runInspection(requestReportDto);
    const inspectionData: InspectionData = getInspectionDataDto(
      inspection,
      conditions,
      report,
    );
    inspection.inspectionData = inspectionData;
    const updatedInspectionDto: InspectionDto = {
      type: 'inspection',
      data: inspection,
    };
    this.inspectionsService.editInspection(updatedInspectionDto, id);
    return response.status(HttpStatus.CREATED);
  }
}
