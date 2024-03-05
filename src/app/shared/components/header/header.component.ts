import { Component } from '@angular/core';
import {NzMenuDirective, NzMenuItemComponent} from "ng-zorro-antd/menu";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NzMenuDirective,
    NzMenuItemComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
