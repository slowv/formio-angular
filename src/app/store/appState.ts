import {IConfigState} from "../model/IConfigState";
import {configReducer} from "./reducer/config.reducer";

export const rootReducer = {
  config: configReducer,
};

export interface AppState {
  config: IConfigState;
}
