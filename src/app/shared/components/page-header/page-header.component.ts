import {Component, Input} from '@angular/core';
import {NzPageHeaderComponent} from "ng-zorro-antd/page-header";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [
    NzPageHeaderComponent,
    NzButtonComponent,
    NzIconDirective
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
}
