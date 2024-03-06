import {createAction, props} from "@ngrx/store";
import {IBreadcrumb} from "../../model/IBreadcrumb";

const SHOW_SPINNER     = '[Config] show spinner';
const HIDE_SPINNER     = '[Config] hide spinner';
const SET_BREADCRUMBS = '[Config] set breadcrumbs';
export const showSpinner     = createAction(SHOW_SPINNER);
export const hideSpinner     = createAction(HIDE_SPINNER);
export const setBreadcrumbs = createAction(SET_BREADCRUMBS, props<{breadcrumbs: IBreadcrumb[]}>());
