import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  id: String,
  data: String,
  description: String,
  repository: {
    link: String,
    branch: String,
    title: String,
    owner: String,
  },
  creationTimestamp: Date,
  lastEditionTimestamp: Date,
  lastInspectionStatus: ['success', 'fail', 'inProgress'],
});
