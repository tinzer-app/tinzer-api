import * as mongoose from 'mongoose';

export const InspectionSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
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
  creationTimestamp: Date,
  lastEditionTimestamp: Date,
  lastInspectionTimestamp: Date,
  inspectionData: {
    // статус всей проверки по всем проектам и правилам
    status: ['success', 'fail', 'inProgress', 'didNotStart'],
    details: {
      conditions: [
        {
          id: String,
          type: [
            'fileExistence',
            'stringsInFilesMatching',
            'fieldValueValidation',
          ],
          params: {
            path: String,
            patterns: String,
            field: String,
            value: String,
          },
        },
      ],
      projectsInspections: [
        {
          project: {
            title: String,
            id: String,
          },
          // статус проверки текущего проекта
          status: ['success', 'fail', 'inProgress', 'didNotStart'],
          // статус по каждому параметру для каждого файла
          conditionsStatuses: [
            ['success', 'fail', 'inProgress', 'didNotStart'],
          ],
        },
      ],
    },
  },
});
