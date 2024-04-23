import * as mongoose from 'mongoose';

export const ConditionSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  creationTimestamp: Date,
  lastEditionTimestamp: Date,
  conditions: [
    {
      type: { type: String },
      id: String,
      // TODO: придумать, как лучше это можно типизировать
      params: { type: [mongoose.Schema.Types.Mixed] },
    },
  ],
});
