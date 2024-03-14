import {Injectable} from '@angular/core';
import {HTTP} from "../../http";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActionDto} from "../../../model/ActionDto";
import {PagingResponse} from "../../../model/PagingResponse";
import {FormActionDto} from "../../../model/FormActionDto";

@Injectable({
  providedIn: 'root'
})
export class ActionService extends HTTP {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAll(paging = {page: 1, size: 10}): Observable<PagingResponse<ActionDto>> {
    return this.post("actions/all", paging);
  }

  getAllFromAction(): Observable<FormActionDto[]> {
    return this.get("actions/form-action-all");
  }

  saveMapping(formActions: {formId: string, actionId: string}[]): Observable<void> {
    return this.post("actions/map-action", formActions);
  }
}
