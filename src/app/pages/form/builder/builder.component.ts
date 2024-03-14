import {Component, OnInit} from '@angular/core';
import {FormioModule} from "@formio/angular";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {Title} from "@angular/platform-browser";
import {FormDto} from "../../../model/FormDto";
import {FormsModule} from "@angular/forms";
import {FormService} from "../../../services/api/form/form.service";
import {ShareModule} from "../../../shared/share.module";
import {ActivatedRoute, Router} from "@angular/router";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [
    FormioModule,
    FontAwesomeModule,
    FormsModule,
    ShareModule,
    PageHeaderComponent
  ],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.scss'
})
export class BuilderComponent implements OnInit {
  form: FormDto = {
    id: '',
    components: [],
    tags: [],
    name: '',
    title: '',
    display: 'form',
    type: 'form'
  };
  formId = '';

  constructor(
    private titleService: Title,
    private formService: FormService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
  ) {
    this.titleService.setTitle("Create form");
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.formId = params['formId'];
      console.log(this.formId)
      if (this.formId) {
        this.formService.getForm(this.formId)
          .subscribe(form => {
            this.form = form;

          });
      }
    })
  }

  onBuilderChange(formComponents: any) {
    console.log(formComponents);
    // save form schema
  }

  saveForm(): void {
    if (this.formId) {
      this.formService.updateForm(this.formId, this.form).subscribe(res => {
        this.form = res
        this.message.success('Update form successfully!')
      });
    } else {
      this.formService.saveForm(this.form).subscribe(res => {
        this.form = res
        this.message.success('Create form successfully!')
      });
    }

  }

  onChangeTag($event: any) {
    this.form.tags = $event.target.value.replaceAll(' ', '').split(";")
      .filter((s: string) => s !== '');
    console.log(this.form.tags);
  }

  changeName(name: any) {
    this.form.name = name;
  }

  changeTitle(title: any) {
    this.form.title = title;
  }

  onBack(): void {
    console.log('onBack');
  }
}
