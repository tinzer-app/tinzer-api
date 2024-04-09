import { InspectionStatus } from '../../types/inspections';

export interface Project {
  id?: string;
  data?: string;
  description?: string;
  repository: {
    link?: string;
    branch?: string;
    title: string;
    owner: string;
  };
  creationTimestamp?: Date;
  lastEditionTimestamp?: Date;
  lastInspectionStatus?: InspectionStatus;
}
