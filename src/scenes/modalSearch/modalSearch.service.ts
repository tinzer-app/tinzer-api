import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_CONDITIONS, MOCK_PROJECTS } from './mocks';

@Injectable()
export class ModalSearchService {
  async getProjectsData() {
    const data = await getDelayedValue(MOCK_PROJECTS);

    return data;
  }

  async getConditionsData() {
    const data = await getDelayedValue(MOCK_CONDITIONS);

    return data;
  }
}
