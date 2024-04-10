import { InspectionStatus } from '../../types/inspections';
import { ConditionDto } from '../conditions/condition.dto';

export class InspectionDto {
  title: string;
  description: string;
  creationTimestamp: Date;
  lastEditionTimestamp: Date;
  lastInspectionTimestamp: Date;
  conditions: {
    title: string;
    id: string;
  }[];
  projects: {
    title: string;
    id: string;
  }[];
  inspectionData: InspectionDataDto;
}

class InspectionDataDto {
  status: InspectionStatus;
  details: {
    conditions: ConditionDto[];
    projectsInspections: {
      project: {
        title: string;
        id: string;
      }[];
      status: InspectionStatus;
      conditionsStatuses: InspectionStatus[];
    }[];
  };
}
