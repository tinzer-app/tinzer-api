declare type GenericCondition<T, P> = {
  type: T;
  params: P;
  id: string;
};

export enum ConditionType {
  fileExistence = 'fileExistence',
  stringsInFilesMatching = 'stringsInFilesMatching',
  fieldValueValidation = 'fieldValueValidation',
}

interface StringsInFilesMatchingFile {
  path: string;
  patterns: string[];
}

interface StringInFileMatchingFile {
  path: string;
  pattern: string;
}

// нужен для отображения таблицы результата на странице проверки
// TODO: придумать что-нибудь получше
export type SingleParamConditionData =
  | GenericCondition<ConditionType.fileExistence, string>
  | GenericCondition<
      ConditionType.stringsInFilesMatching,
      StringInFileMatchingFile
    >;

export type ConditionData =
  | GenericCondition<ConditionType.fileExistence, string[]>
  | GenericCondition<
      ConditionType.stringsInFilesMatching,
      StringsInFilesMatchingFile[]
    >;
