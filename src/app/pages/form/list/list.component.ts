import {Component, OnInit} from '@angular/core';
import {ShareModule} from "../../../shared/share.module";
import {Title} from "@angular/platform-browser";
import {FormService} from "../../../services/api/form/form.service";
import {FormDto} from "../../../model/FormDto";
import {Location, NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {PageHeaderComponent} from "../../../shared/components/page-header/page-header.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ShareModule, NgForOf, RouterLink, PageHeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  forms: FormDto[] = [];
  constructor(
    private titleService: Title,
    private formService: FormService,
    private router: Router,
  ) {
    this.titleService.setTitle("List form");
  }

  ngOnInit(): void {
    this.getForms();
  }

  goToBuilder(formId: string | undefined): void {
    this.router.navigate(["forms/create"], {
      queryParams: {formId}
    }).then()
  }


  getForms(): void {
    this.formService.getForms().subscribe(res => this.forms = res);
  }
}
