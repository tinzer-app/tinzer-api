import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_INSPECTION_PAGE_DATA, MOCK_INSPECTIONS_PAGE_DATA } from './mocks';
import fetch from 'node-fetch';
import { CORE_API } from '../../constants';
import { RequestReportDto } from '../../dto/request-report.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inspection } from './inspection.interface';
import { InspectionDto } from './inspection.dto';
import { Condition } from '../conditions/condition.interface';
import { Project } from '../projects/project.interface';
import { ResponseReportDto } from "../../dto/response-report.dto";
import { filter } from "rxjs";

@Injectable()
export class InspectionsService {
  constructor(
    @InjectModel('Inspection')
    private readonly inspectionModel: Model<Inspection>,
    @InjectModel('Project') private readonly projectModel: Model<Project>,
    @InjectModel('Condition') private readonly conditionModel: Model<Condition>,
  ) {}
  async getInspectionsListData() {
    return await this.inspectionModel.find();
  }

  async getInspection(id: string) {
    return await this.inspectionModel.findOne({ _id: id });
  }

  async createInspection(inspectionDto: InspectionDto) {
    return await this.inspectionModel.create(inspectionDto.data);
  }

  async editInspection(inspectionDto: InspectionDto, id: string) {
    return await this.inspectionModel.findOneAndUpdate(
      { _id: id },
      inspectionDto.data,
    );
  }

  async getReportData() {
    const data = await getDelayedValue(MOCK_INSPECTION_PAGE_DATA);

    return data;
  }

  async getProject(id: string) {
    return await this.projectModel.findOne({ _id: id });
  }

  async getCondition(id: string) {
    return await this.conditionModel.findOne({ _id: id });
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
