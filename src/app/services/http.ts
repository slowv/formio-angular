import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../environments/environment";

export class HTTP {
  constructor(protected http: HttpClient) {
  }

  private queryParams(params: { [key: string]: any } = {}): any {
    const queryString = new URLSearchParams();
    for (const key in params) {
      queryString.append(key, params[key]);
    }
    return queryString.toString();
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  private getOptionsRequest(): any {
    return {
      headers: this.getHeaders()
    };
  }

  private getCustomOptions(options: object = {}): any {
    return Object.assign(this.getOptionsRequest(), options);
  }

  protected get(uri: string, params: object = {}, options?: object): Observable<any> {
    return this.http.get(environment.base_url + uri + `?${this.queryParams(params)}`, this.getCustomOptions(options));
  }

  protected post(uri: string, body?: any, options?: object): Observable<any> {
    return this.http.post(environment.base_url + uri, body, this.getCustomOptions(options));
  }

  protected patch(uri: string, body?: any, options?: object): Observable<any> {
    return this.http.patch(environment.base_url + uri, body, this.getCustomOptions(options));
  }

  protected postForm(uri: string, body?: any, options?: object): Observable<any> {
    return this.http.post(environment.base_url + uri, body);
  }

  protected update(uri: string, body?: any, options?: object): Observable<any> {
    return this.http.put(environment.base_url + uri, body, this.getCustomOptions(options));
  }

  protected delete(uri: string, options?: object): Observable<any> {
    return this.http.delete(environment.base_url + uri, this.getCustomOptions(options));
  }
}
