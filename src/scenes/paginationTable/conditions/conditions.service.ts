import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_CONDITIONS_PAGE_DATA } from './mocks';

@Injectable()
export class ConditionsService {
  async getData() {
    const data = getDelayedValue(MOCK_CONDITIONS_PAGE_DATA);

    return data;
  }
}
