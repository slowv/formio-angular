import {Injectable} from '@angular/core';
import {HTTP} from "../../http";
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";
import {IAuthResponse, IUser} from "../../../model/IAuthState";
import {Observable} from "rxjs";
import {HttpResponse} from "../../../model/HttpResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HTTP {
  token = '';

  constructor(
    protected override http: HttpClient,
    protected store: Store<AppState>
  ) {
    super(http);

    this.store.select((state: AppState) => {
      this.setToken(state.auth.token);
    });
  }

  public login(req: IUser): Observable<HttpResponse<IAuthResponse>> {
    return this.post('/auth/login', req);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }
}
