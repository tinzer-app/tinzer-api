import { Controller, Get, Post } from '@nestjs/common';

import { ProjectsService } from './projects.service';

@Controller('/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  getProjectsListData() {
    return this.projectsService.getProjectsListData();
  }

  @Get('/:id')
  getReportData() {
    return this.projectsService.getReportData();
  }
}
