import {AppState} from "../appState";
import {IConfigState} from "../../model/IConfigState";
import {createSelector} from "@ngrx/store";

export const getConfigState = (state: AppState) => state.config;

export const getConfig = createSelector(
  getConfigState,
  (state: IConfigState) => state
);

export const getBreadcrumd = createSelector(
  (state: AppState) => state.config,
  (state: IConfigState) => state.breadcrumbs
);
