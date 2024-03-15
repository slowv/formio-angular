import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'forms'},
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
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];
