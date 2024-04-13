export interface PaginationResponse {
  pagesCount: number;
  currentPage: number;
}

export interface PaginationRequest {
  currentPaginationPage: number;
}

export interface GenericDataWithPagination<T, D> extends GenericData<T, D> {
  paginationData: PaginationResponse;
}
