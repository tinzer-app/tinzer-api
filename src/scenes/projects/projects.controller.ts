import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ProjectsService } from './projects.service';
import {
  CreateProjectRequestParams,
  DeleteProjectRequestParams,
  EditProjectRequestParams,
  GetProjectsListDataRequestParams,
} from './project.interface';

@Controller('/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  getProjectsListData(
    @Body() { currentPaginationPage }: GetProjectsListDataRequestParams,
  ) {
    return this.projectsService.getProjectsListData(currentPaginationPage);
  }

  @Post('/creating')
  createProject(@Body() { data }: CreateProjectRequestParams) {
    return this.projectsService.createProject(data.data);
  }

  @Get('/:id')
  getProjectData(@Param('id') id: string) {
    return this.projectsService.getProject(id);
  }

  @Post('/editing')
  editProject(@Body() { data: { data, id } }: EditProjectRequestParams) {
    return this.projectsService.editProject(data, id);
  }

  @Delete('/deleting')
  deleteProject(@Body() { id }: DeleteProjectRequestParams) {
    return this.projectsService.deleteProject(id);
  }
}
