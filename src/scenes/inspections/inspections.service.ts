import { Injectable } from '@nestjs/common';

import { getDelayedValue } from 'src/utils/getDelayedValue';

import { MOCK_INSPECTION_PAGE_DATA, MOCK_INSPECTIONS_PAGE_DATA } from './mocks';
import fetch from 'node-fetch';
import { CORE_API } from '../../constants';
import { RequestReportDto } from '../../dto/request-report.dto';

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

  // todo param - inspection dto
  // todo convert inspection dto to RequestReportDto
  async runInspection(inspection: RequestReportDto) {
    //const data = await getDelayedValue(null, 1000);
    let data: string;
    const response = await fetch(CORE_API, {
      method: 'POST',
      body: JSON.stringify(inspection),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status == 201) {
      const jsonResponse: string = (await response.json()) as string;
      data = jsonResponse;
      // todo convert to inspection report
      console.log(jsonResponse);
    }

    return data;
  }
}
