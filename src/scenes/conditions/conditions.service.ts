import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { getPaginationData } from 'src/utils';

import { Condition, CreateConditionData } from './condition.interface';
import { getFullConditionData } from './getFullConditionData';

@Injectable()
export class ConditionsService {
  constructor(
    @InjectModel('Condition') private readonly conditionModel: Model<Condition>,
  ) {}

  async getConditionsListData(currentPaginationPage: number) {
    const conditions: Condition[] = await this.conditionModel.find({});

    const tableConditions = conditions.map(
      ({
        title,
        id,
        description,
        lastEditionTimestamp,
        creationTimestamp,
        conditions,
      }) => ({
        title,
        id,
        description,
        lastEditionTimestamp,
        creationTimestamp,
        conditionsTypes: conditions.map(({ type }) => type),
      }),
    );

    const { paginationData, paginatedData } = getPaginationData(
      tableConditions,
      currentPaginationPage,
    );

    return {
      type: 'conditions',
      data: paginatedData,
      paginationData,
    };
  }

  async getCondition(id: string) {
    const condition = await this.conditionModel.findOne({ id });

    return {
      type: 'condition',
      data: condition,
    };
  }

  async createCondition(data: CreateConditionData) {
    const conditionData = getFullConditionData(data);

    return await this.conditionModel.create(conditionData);
  }

  async editCondition(data: CreateConditionData, id: string) {
    const projectUpdates = getFullConditionData(data, true);

    return await this.conditionModel.findOneAndUpdate({ id }, projectUpdates);
  }

  async deleteCondition(id: string) {
    return await this.conditionModel.findOneAndDelete({ id });
  }
}
