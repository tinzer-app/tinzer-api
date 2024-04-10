import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { ProjectsService } from './projects.service';
import { ProjectDto } from './project.dto';

@Controller('/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  getProjectsListData() {
    return this.projectsService.getProjectsListData();
  }

  @Get('/:id/report')
  getReportData() {
    return this.projectsService.getReportData();
  }

  @Post('/create')
  addProject(@Body() projectDTO: ProjectDto) {
    return this.projectsService.createProject(projectDTO);
  }

  @Get('/:id')
  getProject(@Param('id') id: string) {
    return this.projectsService.getProject(id);
  }
}
