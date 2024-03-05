import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormioModule} from "@formio/angular";
import {ShareModule} from "./shared/share.module";
import {HeaderComponent} from "./shared/components/header/header.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShareModule, RouterOutlet, FormioModule, HeaderComponent, SidebarComponent, RouterLink, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-form-builder';
}
