import {IConfigState, InitConfigData} from "../../model/IConfigState";
import {Action, createReducer, on} from "@ngrx/store";
import {hideSpinner, setBreadcrumbs, showSpinner} from "../action/config.action";
export const registerConfigReducer = createReducer(
  InitConfigData,
  on(showSpinner, (state: IConfigState) => ({
    ...state,
    spinner: true
  })),
  on(hideSpinner, (state: IConfigState) => ({
    ...state,
    spinner: false
  })),
  on(setBreadcrumbs, (state: IConfigState, payload) => {
    return {
      ...state,
      breadcrumbs: payload.breadcrumbs
    };
  })
)
export function configReducer(state: IConfigState | undefined, action: Action): any {
  return registerConfigReducer(state, action)
}
