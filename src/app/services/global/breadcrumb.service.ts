import {Injectable} from "@angular/core";
import {IBreadcrumb} from "../../model/IBreadcrumb";
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from "@angular/router";
import {filter} from "rxjs";
import {AppState} from "../../store/appState";
import {Store} from "@ngrx/store";
import {setBreadcrumbs} from "../../store/action/config.action";

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((e ) => {
      this.store.dispatch(setBreadcrumbs({breadcrumbs: this.createBreadcrumbs(this.activatedRoute.root)}))
    });
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      breadcrumbs.push({ label: child.snapshot.data['breadcrumb'], url: url });
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
}
