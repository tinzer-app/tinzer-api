import { InspectionData } from '../inspection.interface';
import { ResponseReportDto } from '../../../dto/response-report.dto';
import { InspectionStatus } from '../../../types';
import { Inspection } from '../inspection.interface';
import { Condition } from '../../conditions/condition.interface';

type ProjectInspection = {
  project: {
    title: string;
    id: string;
  };
  status: InspectionStatus;
  conditionsStatuses: InspectionStatus[];
};

export const getInspectionDataDto = (
  inspection: Inspection,
  conditions: Condition[],
  responseReport: ResponseReportDto,
): InspectionData => {
  const projectsInspections: ProjectInspection[] = [];
  for (let i = 0; i < responseReport.inspection.length; i++) {
    let status: boolean = true;
    for (const inspectionResult of responseReport.inspection[i].result) {
      status = status && inspectionResult;
    }
    projectsInspections.push({
      project: inspection.projects[i],
      status: status ? InspectionStatus.success : InspectionStatus.fail,
      conditionsStatuses: responseReport.inspection[i].result.map(
        (status): InspectionStatus => {
          return status ? InspectionStatus.success : InspectionStatus.fail;
        },
      ),
    });
  }
  return <InspectionData>{
    status: InspectionStatus.inProgress,
    details: {
      conditions: conditions,
      projectsInspections: projectsInspections,
    },
  };
};
