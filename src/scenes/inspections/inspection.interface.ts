import { InspectionStatus } from '../../types/inspections';
import { Condition } from '../conditions/condition.interface';

export interface Inspection {
  id: string;
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
  inspectionData: InspectionData;
}

export interface InspectionData {
  status: InspectionStatus;
  details: {
    conditions: Condition[];
    projectsInspections: {
      project: {
        title: string;
        id: string;
      };
      status: InspectionStatus;
      conditionsStatuses: InspectionStatus[];
    }[];
  };
}
