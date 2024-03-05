import {Component, Input} from '@angular/core';
import {NzPageHeaderComponent} from "ng-zorro-antd/page-header";

@Component({
  selector: 'app-page-header',
  standalone: true,
    imports: [
        NzPageHeaderComponent
    ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input()
  title: string = '';
  @Input()
  subTitle: string = '';
}
