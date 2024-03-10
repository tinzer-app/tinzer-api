import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_PROJECTS_PAGE_DATA, MOCK_PROJECT_PAGE_DATA } from './mocks';

@Injectable()
export class ProjectsService {
  async getProjectsListData() {
    const data = await getDelayedValue(MOCK_PROJECTS_PAGE_DATA);

    return data;
  }

  async getReportData() {
    const data = await getDelayedValue(MOCK_PROJECT_PAGE_DATA);

    return data;
  }
}
