import {NgModule} from "@angular/core";
import {SubmissionRoutingModule} from "./submission-routing.module";
import {ShareModule} from "../../shared/share.module";

@NgModule({
  imports: [
    ShareModule,
    SubmissionRoutingModule
  ],
})
export class SubmissionModule {
}
