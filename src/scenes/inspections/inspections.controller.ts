import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { PaginationRequest } from 'src/types';

import { InspectionsService } from './inspections.service';
import {
  CreateInspectionRequestParams,
  EditInspectionRequestParams,
  ModalGetEntityRequestParams,
} from './inspection.interface';

@Controller('/inspections')
export class InspectionsController {
  constructor(private readonly inspectionsService: InspectionsService) {}

  @Post()
  getInspectionsListData(@Body() { currentPaginationPage }: PaginationRequest) {
    return this.inspectionsService.getInspectionsListData(
      currentPaginationPage,
    );
  }

  @Post('/modal/projects')
  getInspectionProjects(
    @Body() { searchValue = '' }: ModalGetEntityRequestParams,
  ) {
    return this.inspectionsService.getInspectionProjects(searchValue);
  }

  @Post('/modal/conditions')
  getInspectionConditions(
    @Body() { searchValue = '' }: ModalGetEntityRequestParams,
  ) {
    return this.inspectionsService.getInspectionConditions(searchValue);
  }

  @Get('/:id')
  getInspection(@Param('id') id: string) {
    return this.inspectionsService.getInspection(id);
  }

  @Post('/creating')
  createInspection(@Body() { data }: CreateInspectionRequestParams) {
    return this.inspectionsService.createInspection(data.data);
  }

  @Post('/editing')
  editInspection(@Body() { data: { data, id } }: EditInspectionRequestParams) {
    return this.inspectionsService.editInspection(data, id);
  }

  @Delete('/deleting')
  deleteInspection(@Body() { id }: WithId) {
    return this.inspectionsService.deleteInspection(id);
  }

  @Post('/:id/runInspection')
  runInspection(@Param('id') id: string) {
    return this.inspectionsService.runInspection(id);
  }
}
