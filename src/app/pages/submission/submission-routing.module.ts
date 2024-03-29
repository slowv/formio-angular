import {RouterModule, Routes} from "@angular/router";
import {ListSubmissionComponent} from "./list-submission/list-submission.component";
import {AddSubmissionComponent} from "./add-submission/add-submission.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: ListSubmissionComponent,
    title: 'List submission',
    data: {breadcrumb: 'List'}
  },
  {
    path: 'add',
    component: AddSubmissionComponent,
    title: 'Add Submission',
    data: {breadcrumb: 'Add'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionRoutingModule{}
