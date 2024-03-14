import {Injectable} from '@angular/core';
import {HTTP} from "../../http";
import {HttpClient} from "@angular/common/http";
import {FormDto} from "../../../model/FormDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService extends HTTP {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  saveForm(form: FormDto): Observable<FormDto> {
    return this.post('forms', form);
  }

  getForm(id: string): Observable<FormDto> {
    return this.get(`forms/${id}`);
  }

  getForms(): Observable<FormDto[]> {
    return this.get('forms');
  }

  updateForm(formId: string, form: FormDto) {
    return this.update(`forms/${formId}`, form);
  }
}
