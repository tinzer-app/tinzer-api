import { Controller, Post } from '@nestjs/common';

import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('/projects')
  getData() {
    return this.projectsService.getData();
  }
}
