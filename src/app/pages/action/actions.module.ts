import {NgModule} from "@angular/core";
import {ShareModule} from "../../shared/share.module";
import {ActionsRoutingModule} from "./actions-routing.module";

@NgModule({
  imports: [
    ShareModule,
    ActionsRoutingModule
  ],
})
export class ActionsModule {

}
