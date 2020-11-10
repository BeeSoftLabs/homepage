import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  template: `
    <app-header [links]="links$ | async"></app-header>
    <router-outlet></router-outlet>
    <app-footer [text]="footerText$ | async"></app-footer>
    <app-lang-switcher [lang]="lang$ | async"></app-lang-switcher>
  `,
})
export class LayoutComponent {
  public readonly footerText$ = this.route.data.pipe(
    map((res) => res.footerText)
  );
  public readonly links$ = this.route.data.pipe(map((res) => res.links));
  public readonly lang$ = this.route.data.pipe(map((res) => res.lang));
  constructor(private readonly route: ActivatedRoute) {}
}
