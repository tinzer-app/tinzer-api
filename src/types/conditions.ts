declare interface GenericCondition<T, P> extends GenericSimpleCondition<T, P> {
  id: string;
}

declare interface GenericSimpleCondition<T, P> {
  type: T;
  params: P;
}

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
  | GenericSimpleCondition<ConditionType.fileExistence, string>
  | GenericSimpleCondition<
      ConditionType.stringsInFilesMatching,
      StringInFileMatchingFile
    >;

export type ConditionData =
  | GenericCondition<ConditionType.fileExistence, string[]>
  | GenericCondition<
      ConditionType.stringsInFilesMatching,
      StringsInFilesMatchingFile[]
    >;
