import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_CONDITIONS_PAGE_DATA, MOCK_CONDITION_PAGE_DATA } from './mocks';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Condition } from './condition.interface';
import { ConditionDto } from "./condition.dto";

@Injectable()
export class ConditionsService {
  constructor(
    @InjectModel('Condition') private readonly conditionModel: Model<Condition>,
  ) {}

  async getConditionsListData() {
    return await this.conditionModel.find();
  }

  async getCondition(id: string) {
    return await this.conditionModel.findOne({ _id: id });
  }

  async createCondition(conditionDto: ConditionDto) {
    return await this.conditionModel.create(conditionDto);
  }

  async getReportData() {
    const data = await getDelayedValue(MOCK_CONDITION_PAGE_DATA);

    return data;
  }
}
