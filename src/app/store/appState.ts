import {IConfigState} from "../model/IConfigState";
import {configReducer} from "./reducer/config.reducer";
import {IBreadcrumb} from "../model/IBreadcrumb";

export const rootReducer = {
  config: configReducer,
};

export interface AppState {
  config: IConfigState;
}
