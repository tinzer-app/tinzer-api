import * as mongoose from 'mongoose';

export const ConditionSchema = new mongoose.Schema({
  // todo
  type: ['fileExistence', 'stringsInFilesMatching', 'fieldValueValidation'],
  params: {
    path: String,
    patterns: String,
    field: String,
    value: String,
  },
  title: String,
  description: String,
  creationTimestamp: Date,
});
