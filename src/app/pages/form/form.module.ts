import {NgModule} from "@angular/core";
import {ShareModule} from "../../shared/share.module";
import {FormRoutingModule} from "./form-routing.module";

@NgModule({
  imports: [
    ShareModule,
    FormRoutingModule
  ],
})
export class FormModule {

}
