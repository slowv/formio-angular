import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {setBreadcrumbs} from "../../../store/action/config.action";
import {ActionService} from "../../../services/action/action.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";
import {FormDto} from "../../../model/FormDto";
import {FormService} from "../../../services/form/form.service";
import {FormActionDto} from "../../../model/FormActionDto";
import {ActionDto} from "../../../model/ActionDto";
import {ShareModule} from "../../../shared/share.module";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-action-mapping',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ShareModule,
    NgForOf,
    FormsModule
  ],
  templateUrl: './action-mapping.component.html',
  styleUrl: './action-mapping.component.scss'
})
export class ActionMappingComponent implements OnInit, AfterViewInit {
  forms: FormDto[] = [];
  formActions: FormActionDto[] = [];
  actions: ActionDto[] = []
  tagColors = ['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'];


  constructor(
    private actionService: ActionService,
    private store: Store<AppState>,
    private formService: FormService
  ) {
  }

  ngAfterViewInit(): void {
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
  }

  shuffle(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  };

  ngOnInit(): void {
    this.getForms();
    this.getFormActions();
    this.actionService.getAll().subscribe(res => this.actions = res.contents);
    this.tagColors = this.shuffle(this.tagColors);
  }

  getRandomColorTag(index: number): string {
    return this.tagColors[index];
  }

  getForms(): void {
    this.formService.getForms().subscribe(res => this.forms = res);
  }

  getFormActions() {
    this.actionService.getAllFromAction().subscribe(res => this.formActions = res)
  }

  addMapping(): void {
    this.formActions.push(
      {
        actions: this.actions,
        form: {
          name: '',
          id: '',
          components: [],
          title: '',
          tags: [],
          display: 'form',
          type: 'form'
        }
      }
    )
  }

  saveMapping() {
    this.actionService.saveMapping(this.formActions);
  }
}
