import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { getPaginationData } from 'src/utils';

import {
  CreateProjectData,
  GetProjectPageResponse,
  GetProjectsListDataResponse,
  Project,
} from './project.interface';
import { getFullProjectData } from './getFullProjectData';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel('Project') private readonly projectModel: Model<Project>,
  ) {}

  async getProjectsListData(
    currentPaginationPage: number,
  ): Promise<GetProjectsListDataResponse> {
    const projects = await this.projectModel.find({});

    const { paginationData, paginatedData } = getPaginationData(
      projects,
      currentPaginationPage,
    );

    return {
      type: 'projects',
      data: paginatedData,
      paginationData,
    };
  }

  async getProject(id: string): Promise<GetProjectPageResponse> {
    const project = await this.projectModel.findOne({ id });

    return {
      type: 'project',
      data: project,
    };
  }

  async createProject(data: CreateProjectData) {
    const projectData = getFullProjectData(data);

    return await this.projectModel.create(projectData);
  }

  async editProject(data: CreateProjectData, id: string) {
    const projectUpdates = getFullProjectData(data, true);

    return await this.projectModel.findOneAndUpdate({ id }, projectUpdates);
  }

  async deleteProject(id: string) {
    return await this.projectModel.findOneAndDelete({ id });
  }
}
