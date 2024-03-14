export interface HttpResponse<T> {
  status: {
    code: string;
    timestamp: string;
  }
  data: T
}
