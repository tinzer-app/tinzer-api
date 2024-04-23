import { InspectionStatus } from 'src/types';

export const getInspectionStatus = (statement: boolean) =>
  statement ? InspectionStatus.success : InspectionStatus.fail;
