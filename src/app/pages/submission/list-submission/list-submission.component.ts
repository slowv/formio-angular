import {Component, OnInit} from '@angular/core';
import {SubmissionService} from "../../../services/submission/submission.service";
import {SubmissionDto} from "../../../model/SubmissionDto";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {ShareModule} from "../../../shared/share.module";
import {DatePipe, JsonPipe, NgForOf} from "@angular/common";
import {PagingResponse} from "../../../model/PagingResponse";

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

  constructor(private submissionService: SubmissionService) {
  }

  ngOnInit(): void {
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
