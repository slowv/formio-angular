import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListComponent} from "./list/list.component";
import {BuilderComponent} from "./builder/builder.component";

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {breadcrumb: 'List'},
  },
  {
    path: 'create',
    component: BuilderComponent,
    data: {breadcrumb: 'Create'},
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {

}
