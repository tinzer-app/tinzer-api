import { ConditionType } from 'src/types';

import { Condition } from 'src/scenes/conditions/condition.interface';

import { CoreConditionData, CoreConditionType } from '../getRunInspectionData';

export const getSimplifiedConditions = (conditions: Condition[]) =>
  conditions.reduce<CoreConditionData[]>((acc, { conditions }) => {
    conditions.forEach((condition) => {
      if (condition.type === ConditionType.fileExistence) {
        condition.params.forEach((filePath) => {
          acc.push({
            type: CoreConditionType.fileExistence,
            params: { filePath },
          });
        });
      } else if (condition.type === ConditionType.stringsInFilesMatching) {
        condition.params.forEach(({ path: filePath, patterns }) => {
          patterns.forEach((line) => {
            acc.push({
              type: CoreConditionType.lineExistence,
              params: {
                filePath,
                line,
              },
            });
          });
        });
      }
    });

    return acc;
  }, []);
