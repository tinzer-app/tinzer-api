import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { getInspectionStatus, getPaginationData } from 'src/utils';
import { ConditionType, InspectionStatus } from 'src/types';

import { Condition } from '../conditions/condition.interface';
import { Project } from '../projects/project.interface';
import { CreateInspectionData, Inspection } from './inspection.interface';
import {
  getFullInspectionData,
  getRunInspectionData,
  CoreConditionType,
  getSimplifiedConditions,
  RunInspectionCoreRequestParams,
} from './utils';

@Injectable()
export class InspectionsService {
  constructor(
    @InjectModel('Inspection')
    private readonly inspectionModel: Model<Inspection>,
    @InjectModel('Project') private readonly projectModel: Model<Project>,
    @InjectModel('Condition') private readonly conditionModel: Model<Condition>,
  ) {}

  async getInspectionsListData(currentPaginationPage: number) {
    const inspections: Inspection[] = await this.inspectionModel.find({});

    const tableInspections = inspections.map(
      ({
        title,
        id,
        description,
        lastInspectionTimestamp,
        inspectionData,
      }) => ({
        title,
        id,
        description,
        lastInspectionTimestamp,
        lastInspectionStatus: inspectionData.status,
      }),
    );

    const { paginationData, paginatedData } = getPaginationData(
      tableInspections,
      currentPaginationPage,
    );

    return {
      type: 'inspections',
      data: paginatedData,
      paginationData,
    };
  }

  async getInspectionProjects(searchValue: string) {
    const projects = await this.projectModel.find({
      title: { $regex: searchValue },
    });

    return {
      items: projects.map(({ title, id }) => ({ title, id })),
    };
  }

  async getInspectionConditions(searchValue: string) {
    const conditions = await this.conditionModel.find({
      title: { $regex: searchValue },
    });

    return {
      items: conditions.map(({ title, id }) => ({ title, id })),
    };
  }

  async createInspection(data: CreateInspectionData) {
    const inspectionData = {
      ...getFullInspectionData(data),
      inspectionData: {
        status: InspectionStatus.didNotStart,
        details: undefined,
      },
    };

    return await this.inspectionModel.create(inspectionData);
  }

  async getInspection(id: string) {
    const inspection = await this.inspectionModel.findOne({ id });

    return {
      type: 'inspection',
      data: inspection,
    };
  }

  async editInspection(data: CreateInspectionData, id: string) {
    const inspectionUpdates = getFullInspectionData(data, true);

    return await this.inspectionModel.findOneAndUpdate(
      { id },
      inspectionUpdates,
    );
  }

  async deleteInspection(id: string) {
    return await this.inspectionModel.findOneAndDelete({ id });
  }

  async runInspection(id: string) {
    const inspection = await this.inspectionModel.findOne({ id });

    const conditionsIds = inspection.conditions.map(({ id }) => id);
    const conditions = await this.conditionModel.find({
      id: { $in: conditionsIds },
    });

    const projectsIds = inspection.projects.map(({ id }) => id);
    const projects = await this.projectModel.find({
      id: { $in: projectsIds },
    });

    const simplifiedConditions = getSimplifiedConditions(conditions);

    const requestParams: RunInspectionCoreRequestParams = {
      projects: projects.map(
        ({ repository: { branch, title: repo, ownerNickname: owner } }) => ({
          system: 'github',
          owner,
          repo,
          branch,
        }),
      ),
      conditions: simplifiedConditions,
    };

    const { inspection: inspectionResult } =
      await getRunInspectionData(requestParams);

    const newInspection: Inspection = {
      title: inspection.title,
      id: inspection.id,
      projects: inspection.projects,
      conditions: inspection.conditions,
      description: inspection.description,
      creationTimestamp: inspection.creationTimestamp,
      lastEditionTimestamp: inspection.lastEditionTimestamp,
      lastInspectionTimestamp: new Date().toISOString(),
      inspectionData: {
        status: getInspectionStatus(
          inspectionResult.every(({ result }) => result.every((res) => !!res)),
        ),
        details: {
          conditions: simplifiedConditions.map((condition) => {
            switch (condition.type) {
              case CoreConditionType.fileExistence: {
                return {
                  type: ConditionType.fileExistence,
                  params: condition.params.filePath,
                };
              }

              default: {
                return {
                  type: ConditionType.stringsInFilesMatching,
                  params: {
                    path: condition.params.filePath,
                    pattern: condition.params.line,
                  },
                };
              }
            }
          }),
          projectsInspections: inspectionResult.map(({ result }, idx) => {
            const { title, id } = inspection.projects[idx];

            return {
              project: { title, id },
              status: getInspectionStatus(result.every((res) => res)),
              conditionsStatuses: result.map((res) => getInspectionStatus(res)),
            };
          }),
        },
      },
    };

    // обновляем статусы проектов

    await Promise.all(
      projects.map(({ id }, idx) =>
        this.projectModel.findOneAndUpdate(
          { id },
          {
            lastInspectionStatus: getInspectionStatus(
              inspectionResult[idx].result.every((res) => res),
            ),
          },
        ),
      ),
    );

    return await this.inspectionModel.findOneAndReplace({ id }, newInspection);
  }
}
