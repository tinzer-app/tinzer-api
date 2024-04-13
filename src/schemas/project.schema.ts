import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  repository: {
    link: String,
    branch: String,
    title: String,
    ownerNickname: String,
  },
  creationTimestamp: Date,
  lastEditionTimestamp: Date,
  lastInspectionStatus: String,
});
