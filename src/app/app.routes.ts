import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule),
    data: {breadcrumb: 'Form'}
  },
  {
    path: 'submissions',
    loadChildren: () => import('./pages/submission/submission.module').then(m => m.SubmissionModule),
    data: {breadcrumb: 'Submission'}
  },
  {
    path: 'actions',
    loadChildren: () => import('./pages/action/actions.module').then(m => m.ActionsModule),
    data: {breadcrumb: 'Action'}
  }
];
