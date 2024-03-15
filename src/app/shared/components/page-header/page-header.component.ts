import {Component, Input, OnInit} from '@angular/core';
import {NzPageHeaderComponent} from "ng-zorro-antd/page-header";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {Location, NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    NzPageHeaderComponent,
    NzButtonComponent,
    NzIconDirective,
    NgIf
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input()
  title: string = '';
  @Input()
  subTitle: string = '';
  @Input()
  enableButton = false;
  @Input()
  onClick!: Function;

  @Input()
  btnTitle: string = '';

  constructor(
    private location: Location,
  ) {
  }

  back() {
    if (this.location) {
      this.location.back();
    }
  }
}
