import { GetPaginationDataResult } from './types';
import { PAGINATION_PAGE_ITEMS_COUNT_LIMIT } from './constants';

export const getPaginationData = <T>(
  data: T[],
  currentPage: number,
): GetPaginationDataResult<T> => {
  const skip = (currentPage - 1) * PAGINATION_PAGE_ITEMS_COUNT_LIMIT;

  const pagesCount = Math.ceil(data.length / PAGINATION_PAGE_ITEMS_COUNT_LIMIT);
  const paginatedData = data.slice(
    skip,
    skip + PAGINATION_PAGE_ITEMS_COUNT_LIMIT,
  );

  return {
    paginatedData,
    paginationData: {
      currentPage,
      pagesCount,
    },
  };
};
