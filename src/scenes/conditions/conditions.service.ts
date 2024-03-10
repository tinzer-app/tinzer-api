import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_CONDITIONS_PAGE_DATA, MOCK_CONDITION_PAGE_DATA } from './mocks';

@Injectable()
export class ConditionsService {
  async getConditionsListData() {
    const data = await getDelayedValue(MOCK_CONDITIONS_PAGE_DATA);

    return data;
  }

  async getReportData() {
    const data = await getDelayedValue(MOCK_CONDITION_PAGE_DATA);

    return data;
  }
}
