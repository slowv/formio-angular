export interface PagingResponse<T> {
  contents: T[],
  paging: {
    pageNumber: number;
    pageSize: number;
    totalPage: number;
    totalRecord: number;
  }
}
