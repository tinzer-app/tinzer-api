import { InspectionStatus } from '../../types/inspections';
import { ConditionDto } from '../conditions/condition.dto';
import { Inspection } from "./inspection.interface";

export class InspectionDto {
  type: 'inspection';
  data: Inspection;
  //{
  //   title: string;
  //   description: string;
  //   creationTimestamp: Date;
  //   lastEditionTimestamp: Date;
  //   lastInspectionTimestamp: Date;
  //   conditions: {
  //     title: string;
  //     id: string;
  //   }[];
  //   projects: {
  //     title: string;
  //     id: string;
  //   }[];
  //   inspectionData: InspectionDataDto;
  // };
}

// class InspectionDataDto {
//   status: InspectionStatus;
//   details: {
//     conditions: ConditionDto[];
//     projectsInspections: {
//       project: {
//         title: string;
//         id: string;
//       }[];
//       status: InspectionStatus;
//       conditionsStatuses: InspectionStatus[];
//     }[];
//   };
// }
