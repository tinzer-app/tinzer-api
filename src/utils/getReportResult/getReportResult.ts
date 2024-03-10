import { InspectionStatus } from 'src/types/inspections';

export const getReportResult = (idx: number) => {
  switch (idx % 3) {
    case 0: {
      return InspectionStatus.success;
    }

    case 1: {
      return InspectionStatus.inProgress;
    }

    default: {
      return InspectionStatus.fail;
    }
  }
};
