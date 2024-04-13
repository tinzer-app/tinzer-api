import { PaginationResponse } from 'src/types/pagination';

export interface GetPaginationDataResult<T> {
  paginatedData: T[];
  paginationData: PaginationResponse;
}
