export interface Condition {
  id?: string;
  type: ['fileExistence', 'stringsInFilesMatching', 'fieldValueValidation'];
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
