import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {ShareModule} from "../../../shared/share.module";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {FormService} from "../../../services/form/form.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";
import {setBreadcrumbs} from "../../../store/action/config.action";
import {FormDto} from "../../../model/FormDto";
import {FormioModule} from "@formio/angular";
import {SubmissionDto} from "../../../model/SubmissionDto";
import {NzMessageService} from "ng-zorro-antd/message";
import {SubmissionService} from "../../../services/submission/submission.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-submission',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ShareModule,
    FormsModule,
    NgForOf,
    FormioModule,
    NgIf
  ],
  templateUrl: './add-submission.component.html',
  styleUrl: './add-submission.component.scss'
})
export class AddSubmissionComponent implements OnInit, AfterViewInit {
  formTemplates: FormDto[] = [];
  formTarget?: FormDto;
  submission: SubmissionDto = {
    data: {},
    formId: ''
  };

  constructor(
    private formService: FormService,
    private store: Store<AppState>,
    private message: NzMessageService,
    private submissionService: SubmissionService,
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.store.dispatch(
      setBreadcrumbs({
          breadcrumbs: [
            {
              label: 'Submissions',
              url: '/submissions'
            },
            {
              label: 'Add submission',
            }
          ]
        }
      )
    );
  }

  ngOnInit(): void {
    this.getFormTemplate();
  }


  getFormTemplate(): void {
    this.formService.getForms().subscribe(res => this.formTemplates = res);
  }

  submitData() {
    if (this.formTarget?.id) {
      this.submission.formId = this.formTarget.id;

      this.submissionService.addSubmission(this.submission)
        .subscribe(res => {
          this.message.success(`Add submission to form ${this.formTarget?.name} successfully!`);
          this.router.navigate(["/submissions"])
        });
    } else {
      this.message.error('Not have form is selected!')
    }
  }

  onChangeForm($event: any) {
    if ($event.data) {
      this.submission.data = $event.data
    }
  }
}
