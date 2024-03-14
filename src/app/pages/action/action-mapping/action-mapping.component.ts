import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {setBreadcrumbs} from "../../../store/action/config.action";
import {ActionService} from "../../../services/api/action/action.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/appState";
import {FormDto} from "../../../model/FormDto";
import {FormService} from "../../../services/api/form/form.service";
import {FormActionDto} from "../../../model/FormActionDto";
import {ActionDto} from "../../../model/ActionDto";
import {ShareModule} from "../../../shared/share.module";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {sortBy} from "lodash";

@Component({
  selector: 'app-action-mapping',
  standalone: true,
  imports: [
    PageHeaderComponent,
    ShareModule,
    NgForOf,
    FormsModule,
    NgIf
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
    this.actionService.getAllFromAction().subscribe(res => {
      console.log(res);
      console.log(sortBy(res, "priority"))
      this.formActions = res;
      this.formActions.forEach(formAction => formAction.actions = sortBy(formAction.actions, "priority"))
    })
  }

  addMapping(): void {
    this.formActions.push(
      {
        actions: this.actions,
        form: {
          name: '',
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
    const request: { formId: string, actionId: string }[] = [];
    this.formActions
      .filter(formAction => formAction.form.id && formAction.actions.length > 0)
      .map(formAction => {
        formAction.actions.forEach(action => request.push({formId: formAction.form.id || '', actionId: action.id || ''}))
      })
    this.actionService.saveMapping(request).subscribe(res => {
      console.log(res)
    });
  }
}
