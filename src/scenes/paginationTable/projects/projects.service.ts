import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_PROJECTS_PAGE_DATA } from './mocks';

@Injectable()
export class ProjectsService {
  async getData() {
    const data = getDelayedValue(MOCK_PROJECTS_PAGE_DATA);

    return data;
  }
}
