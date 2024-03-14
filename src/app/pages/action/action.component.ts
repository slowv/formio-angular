import {Component, OnInit} from '@angular/core';
import {ActionService} from "../../services/api/action/action.service";
import {ActionDto} from "../../model/ActionDto";
import {setBreadcrumbs} from "../../store/action/config.action";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/appState";
import {DatePipe, NgForOf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTbodyComponent,
  NzTheadComponent,
  NzThMeasureDirective, NzTrDirective
} from "ng-zorro-antd/table";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {PagingResponse} from "../../model/PagingResponse";
import {PageHeaderComponent} from "../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NzButtonComponent,
    NzIconDirective,
    NzTableCellDirective,
    NzTableComponent,
    NzTbodyComponent,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTrDirective,
    NzWaveDirective,
    PageHeaderComponent
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent implements OnInit {
  actions: PagingResponse<ActionDto> = {
    paging: {
      pageSize: 10,
      pageNumber: 1,
      totalPage: 1,
      totalRecord: 0
    },
    contents: []
  };

  constructor(
    private actionService: ActionService,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(
      setBreadcrumbs({
          breadcrumbs: [
            {
              label: 'Actions',
              url: '/Actions'
            },
            {
              label: 'List',
            }
          ]
        }
      )
    );

    this.actionService.getAll().subscribe(res => this.actions = res);
  }

}
