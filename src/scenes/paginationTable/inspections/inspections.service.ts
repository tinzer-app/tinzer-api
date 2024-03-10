import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_INSPECTIONS_PAGE_DATA } from './mocks';

@Injectable()
export class InspectionsService {
  async getData() {
    const data = getDelayedValue(MOCK_INSPECTIONS_PAGE_DATA);

    return data;
  }
}
