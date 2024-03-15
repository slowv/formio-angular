import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ActionComponent} from "./list/action.component";
import {ActionMappingComponent} from "./action-mapping/action-mapping.component";

const routes: Routes = [
  {
    path: '',
    component: ActionComponent,
    title: 'Actions',
    data: {breadcrumb: 'List'}
  },
  {
    path: 'mapping',
    component: ActionMappingComponent,
    title: 'Actions mapping',
    data: {breadcrumb: 'Add Mapping'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionsRoutingModule {

}
