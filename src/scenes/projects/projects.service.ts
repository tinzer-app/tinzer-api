import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_PROJECT_PAGE_DATA } from './mocks';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from 'src/scenes/projects/project.interface';
import { ProjectDto } from './project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<Project>,
  ) {}

  async getProjectsListData() {
    // const data = await getDelayedValue(MOCK_PROJECTS_PAGE_DATA);
    return await this.projectModel.find();
  }

  async getReportData() {
    const data = await getDelayedValue(MOCK_PROJECT_PAGE_DATA);

    return data;
  }

  async getProject(id: string) {
    return await this.projectModel.findOne({ _id: id });
  }

  async createProject(project: ProjectDto) {
    return await this.projectModel.create(project);
  }
}
