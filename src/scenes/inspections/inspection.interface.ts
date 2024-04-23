import { SingleParamConditionData, InspectionStatus } from 'src/types';

interface InspectionEntity extends WithId {
  title: String;
}

export interface CreateInspectionData {
  title: string;
  description: string;
  conditions: InspectionEntity[];
  projects: InspectionEntity[];
}

export interface CreateInspectionRequestParams {
  data: GenericData<'inspection', CreateInspectionData>;
}

export interface EditInspectionRequestParams {
  data: GenericData<'inspection', CreateInspectionData> & WithId;
}

export interface ModalGetEntityRequestParams {
  searchValue?: string;
}

export interface Inspection {
  id: string;
  title: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  conditions: InspectionEntity[];
  projects: InspectionEntity[];
  inspectionData: InspectionData;
  lastInspectionTimestamp?: Timestamp | null;
}

export interface InspectionData {
  status: InspectionStatus;
  details?: {
    conditions: SingleParamConditionData[];
    projectsInspections: {
      project: InspectionEntity;
      status: InspectionStatus;
      conditionsStatuses: InspectionStatus[];
    }[];
  } | null;
}
