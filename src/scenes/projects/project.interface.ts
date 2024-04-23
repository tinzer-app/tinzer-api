import {
  GenericDataWithPagination,
  InspectionStatus,
  PaginationRequest,
} from 'src/types';

export type CreateProjectData = {
  title: string;
  description: string;
  repository: {
    branch: string;
    title: string;
    ownerNickname: string;
  };
};

export type GetProjectsListDataRequestParams = PaginationRequest;

export interface CreateProjectRequestParams {
  data: GenericData<'project', CreateProjectData>;
}

export type GetProjectsListDataResponse = GenericDataWithPagination<
  'projects',
  Project[]
>;

export type GetProjectPageResponse = GenericData<'project', Project>;

export interface EditProjectRequestParams {
  data: GenericData<'project', CreateProjectData> & WithId;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  repository: {
    link: string;
    branch: string;
    title: string;
    ownerNickname: string;
  };
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastInspectionStatus: InspectionStatus;
}
