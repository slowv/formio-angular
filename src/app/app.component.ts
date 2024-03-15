import {AfterViewChecked, Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormioModule} from "@formio/angular";
import {ShareModule} from "./shared/share.module";
import {HeaderComponent} from "./shared/components/header/header.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {FooterComponent} from "./shared/components/footer/footer.component";
import {SpinnerComponent} from "./shared/components/spinner/spinner.component";
import {Store} from "@ngrx/store";
import {AppState} from "./store/appState";
import {getBreadcrumd} from "./store/selector/config.selector";
import {IBreadcrumb} from "./model/IBreadcrumb";
import {NgForOf} from "@angular/common";
import {BreadcrumbService} from "./services/global/breadcrumb.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShareModule, RouterOutlet, FormioModule, HeaderComponent, SidebarComponent, RouterLink, FooterComponent, SpinnerComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewChecked {
  title = 'demo-form-builder';
  breadcrumb: IBreadcrumb[] = []

  constructor(
    private store: Store<AppState>,
    private breadcrumbService :BreadcrumbService
  ) {
  }

  ngAfterViewChecked(): void {
    setTimeout(() => this.store.select(getBreadcrumd).subscribe(br => this.breadcrumb = br), 0)
  }
}
