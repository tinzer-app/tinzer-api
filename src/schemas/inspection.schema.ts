import * as mongoose from 'mongoose';

export const InspectionSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  creationTimestamp: Date,
  lastEditionTimestamp: Date,
  lastInspectionTimestamp: Date,
  projects: [
    {
      title: String,
      id: String,
    },
  ],
  conditions: [
    {
      title: String,
      id: String,
    },
  ],
  inspectionData: {
    // статус всей проверки по всем проектам и правилам
    status: String,
    details: {
      type: {
        // TODO: придумать, как затипизировать правила
        conditions: [{}],
        projectsInspections: [
          {
            project: {
              title: String,
              id: String,
            },
            // статус проверки текущего проекта
            status: String,
            // статус по каждому параметру для каждого файла
            conditionsStatuses: [String],
          },
        ],
      },
      default: undefined,
      required: false,
    },
  },
});
