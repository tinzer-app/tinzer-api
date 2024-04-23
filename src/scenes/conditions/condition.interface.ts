import { ConditionData } from 'src/types';

export interface Condition {
  id: string;
  title: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  conditions: ConditionData[];
}

export type CreateConditionData = Pick<
  Condition,
  'title' | 'description' | 'conditions'
>;

export interface CreateConditionRequestParams {
  data: GenericData<'condition', CreateConditionData>;
}

export interface EditConditionRequestParams {
  data: GenericData<'condition', CreateConditionData> &
    DeleteConditionRequestParams;
}

export interface DeleteConditionRequestParams {
  id: string;
}
