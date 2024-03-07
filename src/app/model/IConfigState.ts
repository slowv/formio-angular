import {IBreadcrumb} from "./IBreadcrumb";

export interface IConfigState {
  spinner: boolean;
  breadcrumbs: IBreadcrumb[];
}

export const InitConfigData: IConfigState = {
  spinner: false,
  breadcrumbs: []
};
