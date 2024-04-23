import { Model } from 'mongoose';
import fetch from 'node-fetch';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { getPaginationData } from 'src/utils';
import { InspectionStatus } from 'src/types';

import { CORE_API } from '../../constants';
import { Condition } from '../conditions/condition.interface';
import { Project } from '../projects/project.interface';
import { ResponseReportDto } from '../../dto/response-report.dto';
import { RequestReportDto } from '../../dto/request-report.dto';
import { getFullInspectionData } from './getFullInspectionData';
import { CreateInspectionData, Inspection } from './inspection.interface';

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

  // todo param - inspection dto
  // todo convert inspection dto to RequestReportDto
  async runInspection(inspection: RequestReportDto) {
    //const data = await getDelayedValue(null, 1000);
    let data: ResponseReportDto;
    const response = await fetch(CORE_API, {
      method: 'POST',
      body: JSON.stringify(inspection),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status == 201) {
      data = JSON.parse(await response.json()) as ResponseReportDto;
    }

    return data;
  }
}
