import {IConfigState} from "../model/IConfigState";
import {configReducer} from "./reducer/config.reducer";
import {IAuthState} from "../model/IAuthState";
import {authReducer} from "./reducer/auth.reducer";

export const rootReducer = {
  config: configReducer,
  auth: authReducer
};

export interface AppState {
  auth: IAuthState;
  config: IConfigState;
}
