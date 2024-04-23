interface GenericCoreCondition<T, D> {
  type: T;
  params: D;
}

interface ProjectsData {
  system: 'github';
  owner: string;
  repo: string;
  branch: string;
}

export type CoreConditionData =
  | GenericCoreCondition<CoreConditionType.fileExistence, { filePath: string }>
  | GenericCoreCondition<
      CoreConditionType.lineExistence,
      { filePath: string; line: string }
    >;

export enum CoreConditionType {
  fileExistence = 'FindFile',
  lineExistence = 'FindLine',
}

export interface RunInspectionCoreRequestParams {
  projects: ProjectsData[];
  conditions: CoreConditionData[];
}

interface InspectionCoreResult {
  project: ProjectsData;
  result: boolean[];
}

export interface RunInspectionCoreResponse {
  inspection: InspectionCoreResult[];
}
