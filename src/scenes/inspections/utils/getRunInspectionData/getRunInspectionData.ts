import { CORE_API } from 'src/constants';

import {
  RunInspectionCoreRequestParams,
  RunInspectionCoreResponse,
} from './types';

export const getRunInspectionData = (
  requestParams: RunInspectionCoreRequestParams,
): Promise<RunInspectionCoreResponse> =>
  fetch(CORE_API, {
    method: 'POST',
    body: JSON.stringify(requestParams),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
