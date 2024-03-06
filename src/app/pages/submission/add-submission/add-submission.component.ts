import {Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {ShareModule} from "../../../shared/share.module";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {FormService} from "../../../services/form/form.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";
import {setBreadcrumbs, showSpinner} from "../../../store/action/config.action";
import {IBreadcrumb} from "../../../model/IBreadcrumb";

@Component({
  selector: 'app-add-submission',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ShareModule,
    FormsModule,
    NgForOf
  ],
  templateUrl: './add-submission.component.html',
  styleUrl: './add-submission.component.scss'
})
export class AddSubmissionComponent implements OnInit {
  formOfOption: Array<{ label: string; value: string }> = [];
  formTemplateOption: any = '';

  constructor(private formService: FormService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    const breadcrumbs: IBreadcrumb[] = [
      {
        label: 'Submission',
        url: '/submissions'
      },
      {
        label: 'Add submission',
      }
    ]
    this.store.dispatch(setBreadcrumbs({breadcrumbs}))

    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({label: i.toString(36) + i, value: i.toString(36) + i});
    }
    this.formOfOption = children;
  }


}
