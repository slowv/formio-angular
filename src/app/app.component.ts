import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormioModule} from "@formio/angular";
import {ShareModule} from "./shared/share.module";
import {HeaderComponent} from "./shared/components/header/header.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {SpinnerComponent} from "./shared/components/spinner/spinner.component";
import {Store} from "@ngrx/store";
import {AppState} from "./store/appState";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShareModule, RouterOutlet, FormioModule, HeaderComponent, SidebarComponent, RouterLink, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-form-builder';


  constructor(private store: Store<AppState>) {
  }
}
