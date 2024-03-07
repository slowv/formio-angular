import {Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {setBreadcrumbs} from "../../../store/action/config.action";
import {ActionService} from "../../../services/action/action.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";
import {FormDto} from "../../../model/FormDto";
import {FormService} from "../../../services/form/form.service";
import {NgForOf, NgIf} from "@angular/common";
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {FormActionDto} from "../../../model/FormActionDto";

@Component({
  selector: 'app-action-mapping',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NzRowDirective,
    NzColDirective,
    NzSelectComponent,
    NzOptionComponent,
    FormsModule,
    NgForOf,
    NzTypographyComponent,
    NgIf
  ],
  templateUrl: './action-mapping.component.html',
  styleUrl: './action-mapping.component.scss'
})
export class ActionMappingComponent implements OnInit {
  selectedValue!: FormDto;
  forms: FormDto[] = [];
  isEditMapping = false;
  formActions: FormActionDto[] = [];

  constructor(
    private actionService: ActionService,
    private store: Store<AppState>,
    private formService: FormService,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(
      setBreadcrumbs({
          breadcrumbs: [
            {
              label: 'Actions',
              url: '/actions'
            },
            {
              label: 'Mapping',
            }
          ]
        }
      )
    );
    this.getForms();
    this.getFormActions();
  }

  getForms(): void {
    this.formService.getForms().subscribe(res => this.forms = res);
  }

  getFormActions() {
    this.actionService.getAllFromAction().subscribe(res => this.formActions = res)
  }

  onEditMapping(): void {
    this.isEditMapping = !this.isEditMapping;
    console.log(this.isEditMapping)
  }
}
