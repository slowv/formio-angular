import {Routes} from '@angular/router';
import {BuilderComponent} from "./pages/form/builder/builder.component";
import {ListComponent} from "./pages/form/list/list.component";
import {ActionComponent} from "./pages/action/action.component";

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'forms/create',
    component: BuilderComponent
  },
  {
    path: 'submissions',
    loadChildren: () => import('./pages/submission/submission.module').then(m => m.SubmissionModule)
  },
  {
    path: 'actions',
    component: ActionComponent,
    title: 'Actions'
  }
];
