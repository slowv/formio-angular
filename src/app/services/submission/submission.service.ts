import {Injectable} from "@angular/core";
import {HTTP} from "../http";
import {HttpClient} from "@angular/common/http";
import {SubmissionDto} from "../../model/SubmissionDto";
import {Observable} from "rxjs";
import {PagingResponse} from "../../model/PagingResponse";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService extends HTTP {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  addSubmission(submission: SubmissionDto): Observable<SubmissionDto> {
    return this.post("submissions", submission);
  }

  getAll(pagingRequest = {page: 1, size: 10, orders: {createdDate: "DESC"}}): Observable<PagingResponse<SubmissionDto>> {
    return this.post("submissions/all", pagingRequest)
  }
}
