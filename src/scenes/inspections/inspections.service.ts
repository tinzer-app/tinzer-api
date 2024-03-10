import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_INSPECTION_PAGE_DATA, MOCK_INSPECTIONS_PAGE_DATA } from './mocks';

@Injectable()
export class InspectionsService {
  async getInspectionsListData() {
    const data = await getDelayedValue(MOCK_INSPECTIONS_PAGE_DATA);

    return data;
  }

  async getReportData() {
    const data = await getDelayedValue(MOCK_INSPECTION_PAGE_DATA);

    return data;
  }
}
