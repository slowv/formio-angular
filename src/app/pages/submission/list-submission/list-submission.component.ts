import {Component, OnInit} from '@angular/core';
import {SubmissionService} from "../../../services/api/submission/submission.service";
import {SubmissionDto} from "../../../model/SubmissionDto";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {ShareModule} from "../../../shared/share.module";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {PagingResponse} from "../../../model/PagingResponse";
import {setBreadcrumbs} from "../../../store/action/config.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";

@Component({
  selector: 'app-list-submission',
  standalone: true,
  imports: [
    PageHeaderComponent, ShareModule, NgForOf, JsonPipe, DatePipe
  ],
  templateUrl: './list-submission.component.html',
  styleUrl: './list-submission.component.scss'
})
export class ListSubmissionComponent implements OnInit {
  submissions: PagingResponse<SubmissionDto> = {
    contents: [],
    paging: {
      totalPage: 0,
      pageNumber: 0,
      pageSize: 10,
      totalRecord: 0
    }
  };
  submissionData = '';
  showModal = false;

  constructor(
    private submissionService: SubmissionService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(
      setBreadcrumbs({
          breadcrumbs: [
            {
              label: 'Submissions',
              url: '/submissions'
            },
            {
              label: 'List',
            }
          ]
        }
      )
    );
    this.getAll();
  }

  getAll(): void {
    this.submissionService.getAll().subscribe(res => this.submissions = res)
  }


  showSubmissionData(id: string | undefined) {
    if (id) {
      this.submissionData = this.submissions.contents.find(s => s.id === id)?.data;
      this.showModal = true;
    }
  }


  handleCancel() {
    this.showModal = false;
  }
}
