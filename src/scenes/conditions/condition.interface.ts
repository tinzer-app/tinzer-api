import { ConditionType } from "../../types";

export interface Condition {
  id?: string;
  type: ConditionType;
  params: {
    path: string;
    patterns?: string;
    field?: string;
    value?: string;
  };
  title?: string;
  description?: string;
  creationTimestamp?: Date;
}
